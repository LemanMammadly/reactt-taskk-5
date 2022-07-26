import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Index = () => {
    const local=JSON.parse(localStorage.getItem('products'))

  return (
    <div className="container">
        <div className="row justify-content-evenly">
      {
        local.slice(0,4).map(item=>{
            return(
                <Card className='all' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <Button variant="primary">{item.price} TL</Button>
                </Card.Body>
                </Card>
            )
        })
      }
       <Link to='/product'><button className='btn btn-success mt-3'>LOAD MORE</button></Link>
      </div>
    </div>
  )
}

export default Index