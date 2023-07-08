import React from 'react'
import  HospitalCard  from './HospitalCard'


const HospitalList = ({data}) => {
  return (
    <>
    {
      data?.map((item, index)=>(

        < HospitalCard item={item} key={index} />
      
      ))
    }
      </>
  )
}

export default HospitalList