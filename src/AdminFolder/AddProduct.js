import React, {useState, useEffect} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { Link } from 'react-router-dom';
import { createProduct , getCategories} from './adminApi';


const Product = () => {
const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    createdProduct: "",
    redirectToProfile: false,
    FormData: ""
})

const { user, token } = isAuthenticated()
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
    redirectToProfile,
    formData
   } = values;

   // load all the categories and set form data

   const init = () =>{
    getCategories().then(data => {
        if(data.error) {
            setValues({ ...values, error: data.error })
        } else {
            setValues({ ...values, categories: data, formData: new FormData()})
        }
    })

   }
    useEffect(() => {
       init();
    }, [])

 const handleChange = name => event => {
     const value = name === "photo" ? event.target.files[0] : event.target.value;
     formData.set(name, value);
     setValues({ ...values, [name]: value });
 }

 const clickSubmit = event => {
     event.preventDefault()
     setValues({ ...values, error: '', loading: true});

     createProduct(user._id, token, formData).then(data => {
         if(data.error) {
             setValues({ ...values, error: data.error });
         } else {
             setValues({
                ...values,
                name:"",
                description:"",
                photo:"",
                price:"",
                quantity:"",
                loading: false,
                createdProduct: data.fname
            });
         }
     });
 };
 
    //  show  error message  if product is not created  
 const alertError = (error) => (
     <div className="alert alert-danger" style={{ display: error ? "" : "none"}}>
         {error}
     </div>
 )

        //show if product is created successfully  
 const alertSuccess = () => (
    <div className="alert alert-info" style={{ display: createdProduct ? '' : "none"}}
    >
     <h2>{`${createdProduct}`} created successfully!</h2>
    </div>
)
 const loadingSign = () => loading && (
     <div className="alert alert-success">
         <h2>Loading...</h2>
     </div>
 ) 

const createProductForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
        <h4>Post Photo</h4>
        <div className="form-group">
            <label className="btn btn-secondary">
                <input onChange={handleChange("photo")}  type="file" name="photo" accept="image/*"/>
            </label>
        </div>

        <div className="form-group">
            <label className="text-muted">name</label>
            <input onChange={handleChange("name")} type="text"  className="form-control" value={name} />
        </div>

        <div className="form-group">
            <label className="text-muted">Descriptin</label>
            <textarea onChange={handleChange("description")} className="form-control" value={description} />
        </div>
        <div className="form-group">
            <label className="text-muted">Price</label>
            <input onChange={handleChange("price")} className="form-control" type="number" value={price} />
        </div>


        <div className="form-group">
            <label className="text-muted">Category</label>
            <select
                onChange={handleChange('category')} 
                className="form-control"
                >
              <option>Select your Product</option>
              {/* loop through diff. category */}
                {categories && categories.map((c, i) => (
                    <option key={i} value={c._id}>
                        {c.name}
                    </option>
                ))}
             </select>
        </div>

        <div className="form-group">
            <label className="text-muted">Would you like to ship your product?</label>
            <select
                onChange={handleChange("shipping")} 
                className="form-control" 
            >
                <option>Please Select</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
             </select>

        </div>
        <div className="form-group">
            <label className="text-muted">Quantity</label>
            <input onChange={handleChange("quantity")} type="number"  className="form-control" value={quantity} />
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
                {alertError()}
                {alertSuccess()}
                {loadingSign()}
                {createProductForm ()}
                </div>
            </div>
        </Layout>
    )
    
}

export default Product;