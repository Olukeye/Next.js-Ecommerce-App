import React, {useState} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { Link } from 'react-router-dom';
import {  createCategory } from './adminApi';


const Category = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    // distructure
    const {user, token} = isAuthenticated();

    const handleChange = (e) => {
        setError('')
        setName(e.target.value)
    }

// handle submit button
    const clickSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to API to create category 
        createCategory(user._id, token, {name}).then(data => {
            if(data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
            };
        });
    };


    const CategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control"
                onChange={handleChange}
                value={name}
                required
                autoFocus />
            </div>
            <button className="btn btn-outline-primary">
                Add Product Category
            </button>
        </form>
    );

    // Show success message >>>>>>>
    const Success = () => {
        if(success) {
            return <h2 className="text-success">{name} created </h2>
        }
    }

    // Show error message if not not successful  >>>>>
    const Errors = () => {
        if(error) {
            return <h2 className="text-danger">category should be unique! </h2>
        }
    }

    // return button
    const goBack = () => (
        <div className="mt-5">
            <Link to="/adminprofile"  className="
            text-warning">back</Link>
        </div>
    )

    return (
        <Layout title='Add To Category' 
        description= {`hello ${user.name}, please add to category` }
        className='container-fluid'
        >
            <div className="row">
                <div className="col-6 offset-md-3">
                    {Success()}
                    {Errors()}
                    {CategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    )
    
}
export default Category;