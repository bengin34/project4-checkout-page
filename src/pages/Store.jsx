import React from 'react'
import { Card, Button } from 'react-bootstrap'
import data from "../data/item"


const Store = () => {
  return (
  
     <>
     <h1>Store</h1>

     {data.map(({id,name,price,image,dampingRate,amount}) =>{
        return (
          <div className='container row gap-2'>
          <Card className='d-fex col col-xl-6 col-lg-3 col-md-4 col-sm-12 justify-content-center align-items-center mb-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ width:"90%"}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='d-flex justify-content-center align-items-center'>
         <h1>${price}</h1> <small><del className='text-warning'>${1300}</del></small> 
        </Card.Text>
        <div className='d-flex me-auto justify-content-between align-items-center'>
        <Button className='px-3' variant="primary">+</Button>
        <h3>{amount}</h3>
        <Button className='px-3' variant="primary">-</Button>
        </div>
        <div className='d-flex justify-content-center align-items-center' > <Button className='px-3' variant="danger">Remove</Button></div>
       
        
        <h2>Product Total:$ <span>100</span></h2>
      </Card.Body>
         </Card>
         </div>
         )  
  
     })}
       
  
     
     </> 

  )
}

export default Store
