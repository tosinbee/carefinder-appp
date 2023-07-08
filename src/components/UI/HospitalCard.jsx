import React from 'react'
// import productImg from '../../assets/images/arm-chair-01.jpg'
import {motion} from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const HospitalCard = ({item }) => {

  const dispatch = useDispatch()


  return (
   <Col lg='3' md='4'>
   <div className="product__item">
   <div className='p-2 product__info'>
   <h3 className="product__name">
     <Link to={`/hospital/${item.id }`}>{item.hospitalName}</Link>
    </h3>
    <span >{item.location}</span>
   </div>
   </div>
   </Col>
  )
}

export default  HospitalCard 