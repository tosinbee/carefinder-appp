import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth, storage, db } from '../firebase.config';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Signup = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      if (file) {
        const storageRef = ref(storage, `images/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          null,
          (error: any) => {
            toast.error(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                // update user profile
                await updateProfile(user, {
                  displayName: username,
                  photoURL: downloadURL,
                });

                //store userdata in firestore database
                await setDoc(doc(db, 'users', user.uid), {
                  uid: user.uid,
                  displayName: username,
                  email,
                  photoURL: downloadURL,
                });
              }
            );
          }
        );
      }

      setLoading(false);
      toast.success('Account created successfully');
      navigate('/login');
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  return (
    <Helmet title='Sign Up'>
      <section className=''>
        <Container>
          <Row>
            {loading ? (
              <Col lg='12' className='text-center'>
                <h5 className='fw-bold'>Loading...</h5>
              </Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Sign Up</h3>

                <Form className='auth__form' onSubmit={signup}>
                  <FormGroup className='form__group'>
                    <input
                      type='text'
                      placeholder='Enter your Username'
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <input
                      type='email'
                      placeholder='Enter your Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <input
                      type='password'
                      placeholder='Enter your Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <input
                      type='file'
                      onChange={(e) =>
                        setFile(e.target.files ? e.target.files[0] : null)
                      }
                    />
                  </FormGroup>

                  <button
                    type='submit'
                    className='buy__button auth__btn '
                  >
                    Create an Account
                  </button>
                  <p>
                    Already have an account? <Link to='/login'>Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
