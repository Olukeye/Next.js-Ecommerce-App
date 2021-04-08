import React from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { Link } from 'react-router-dom';


const AdminProfile = () => {

    const {user: { name, email, role}} = isAuthenticated();

    const adminLink = () => {
        return (
            <div className="card">
                <h4 className="card-header">Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">Add Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/products">Add Product</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const userData = () => {
        return (
            <div className="card mb-5">
            <h3 className='card-header'>Your Details</h3>
            <ul className='list-group'>
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{role === 1 ? "admin" : "Registered User" }</li>
            </ul>
        </div>
        )
    }

    return  (

        <Layout title='Profile Page' 
        description= {`hello ${name}`}
        className='container-fluid'
        >
            <div className="row">
                <div className="col-3">
                    {userData()}
                </div>

                <div className="col-9">
                    {adminLink()}
                </div>
            </div>
        </Layout>
    );
};
export default AdminProfile;