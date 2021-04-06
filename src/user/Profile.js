import React from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';


const Profile = () => {

    const {user: { name, email, role}} = isAuthenticated();
    return  (

        <Layout title='Profile Page' 
        description='Profile'
        className='container'>
        <div className="card mb-5">
            <h3 className='card-header'>User Details</h3>
            <ul className='list-group'>
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{role === 1 ? "admin" : "Registered User" }</li>
            </ul>
        </div>
        <div className="card mb-5">
            <h3 className="card-header">Purchase History</h3>
            <ul className="list-group">
                <li className="list-group-item">hsitory</li>
            </ul>
        </div>
        </Layout>
    );
};
export default Profile;