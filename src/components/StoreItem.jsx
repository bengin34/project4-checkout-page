import React from 'react'
import { Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'



const StoreItem = ({id,name,price,image,amount,dampingRate}) => {
    const quantity = 0
  return (
    <Card>
      <Card.Img variant='top' src={image} height="300px"  style={{onjectFit:"cover", maxWidth:"300px", margin:"0 auto"} } className="align-items-center"/>
    <Card.Body className='d-flex flex-column' >
        <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4' >
            <span className='fs-2'>{name}</span>
            <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'
    </Card.Body>
    </Card>
  )
}

export default StoreItem
