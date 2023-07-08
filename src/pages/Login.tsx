import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom'
import "../styles/login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success('Successfully logged in');
      navigate('/checkout');
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
  }

  return (
    <Helmet title='Log In'>
      <section className="">
        <Container>
          <Row>
            {
              loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading...</h5></Col> :
                <Col lg="6" className='m-auto text-center'>
                  <h3 className="fw-bold mb-4">Login</h3>
                  <Form className='auth__form' onSubmit={signIn}>
                    <FormGroup className='form__group'>
                      <input type="email" placeholder='Enter your Email'
                        value={email} onChange={e => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className='form__group'>
                      <input type="password" placeholder='Enter your Password'
                        value={password} onChange={e => setPassword(e.target.value)}
                      />
                    </FormGroup>
                    <button type='submit' className="buy__button auth__btn ">
                      Login
                    </button>
                    <p>Don't have an account? <Link to='/signup'>Create one here</Link></p>
                  </Form>
                </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login;
