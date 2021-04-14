import React, {useState} from 'react';
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
    FormData } = values


const createProductForm = () => (
    <form className="mb-3">
        <h4>Post Photo</h4>
        <div className="form-group">
            <label className="btn btn-ouline">
                <input type="file" name="photo" accept="image*"/>
            </label>
        </div>
        
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