import React from 'react'
import { Field, Form, Formik } from 'formik';

const AddProduct = () => {
  return (
    <div className='App'>
        <h1 className='text-center mt-4'>ADD PRODUCTS</h1>
        <Formik
           initialValues={{
            producttName:'',
            price:'',
            image:'',
           }}
           onSubmit={(values)=>{
            let products=JSON.parse(localStorage.getItem('products'));
            products.push({
                ...values
            })
            localStorage.setItem('products',JSON.stringify(products))
           }}
        >
        <Form className='col-lg-5 mx-auto mt-3'>
            <label htmlFor="producttName">Product Name</label>
            <Field className="form form-control mt-3" name='productName' placeholder='products...'/>

            <label htmlFor="price">Product Price</label>
            <Field className="form form-control mt-3" type='number' name='price' placeholder='0.00'/>

            <label htmlFor="image">Product Url</label>
            <Field className="form form-control mt-3" type='url' name='image' placeholder=''/>
            <button className='btn btn-success mt-2' type='submit'>SUBMIT</button>
        </Form>
        </Formik>
    </div>
  )
}

export default AddProduct


