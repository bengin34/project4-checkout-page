import React from 'react'
import { Col, Row } from 'react-bootstrap'
import data from "../data/item"
import StoreItem from '../components/StoreItem'

const Store = () => {
  return (
  
     <>
     <h1>Store</h1>
     <Row md={2} xs={1} lg={3} className="g-3">
     {data.map((item) =>{
        return (
       
        <Col ><StoreItem {...item} /></Col>
         )  
  
     })}
       
  
     </Row>
     </> 

  )
}

export default Store
