import React from 'react'
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth';

const Dashboard = () => {

    const { user: { name, email, role }} = isAuthenticated();
    return (
        <Layout title='Dashboard' description='User Dashboard' 
        className='container'>
            <div>
                <div className='card mb-3'>
                    <h2 className='card-header'>User Data</h2>
                    <ul className='list-group'>
                        <li className='list-group-item'>{name}</li>
                        <li className='list-group-item'>{email}</li>
                        <li className='list-group-item'>{role === 1
                        ? "Admin" : "Valid User"}</li>
                    </ul>
                </div>
                <div className='card'>
                <h2 className='card-header'>Purchase History</h2>
                <ul className='list-group'>
                        <li className='list-group-item'>History</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;