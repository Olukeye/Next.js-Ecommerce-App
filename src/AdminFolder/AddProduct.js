import React, {useState, useEffect} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { Link } from 'react-router-dom';
import {  createProduct } from './adminApi';


const Product = () => {
const { user, token } = isAuthenticated()
const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: "",
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    createdProduct: "",
    redirectToProfile: false,
    FormData: ""
})

// distructure 
const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    photo,
    loading,
    createdProduct,
    redirectToProfil,
    formData } = values

    useEffect(() => {
        setValues({...values, formData: new FormData()})
    }, [])

 const handleChange = name => event => {
     const value = name === 'photo' ? event.target.file[0] : event.target.value
     formData.set(name, value)
     setValues({...values, [name] : value})
 }

 const clickSubmit =()=> {

 }
const createProductForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
        <h4>Post Photo</h4>
        <div className="form-group">
            <label className="btn btn-secondary">
                <input onChange={handleChange('photo')}  type="file" name="photo" accept="image*"/>
            </label>
        </div>

        <div className="form-group">
            <label className="text-muted">name</label>
            <input onChange={handleChange('name')} type="text"  className="form-control" value={name} />
        </div>

        <div className="form-group">
            <label className="text-muted">Descriptin</label>
            <input onChange={handleChange('description')} className="form-control" value={description} />
        </div>
        <div className="form-group">
            <label className="text-muted">Category</label>
            <select
                onChange={handleChange('category')} 
                className="form-control" value={category}>
             <option value="60720fbb93c1aa0b48a4f3e1">jeans</option>
             </select>
        </div>

        <div className="form-group">
            <label className="text-muted">Shipping</label>
            <select
                onChange={handleChange('shipping')} 
                className="form-control" value={shipping}>
                <option value="0">No</option>
                <option value="1">Yes</option>
             </select>

        </div>
        <div className="form-group">
            <label className="text-muted">Quantity</label>
            <input onChange={handleChange('quantity')} type="number"  className="form-control" value={quantity} />
        </div>
        <button className="btn btn-outline-primary">Create Product</button>
    </form>
)


    return (
        <Layout title='Add  Product' 
        description= {`hello ${user.name}, please Create product` }
        className='container-fluid'
        >
            <div className="row">
                <div className="col-6 offset-md-3">
                {createProductForm ()}
                </div>
            </div>
        </Layout>
    )
    
}

export default Product;