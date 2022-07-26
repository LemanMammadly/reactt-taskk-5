import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const local=JSON.parse(localStorage.getItem('products'))

    return (
        <div className="container">
        <div className="row justify-content-evenly">
      {
        local.map(item=>{
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
      </div>
    </div>
  )
}

export default Product