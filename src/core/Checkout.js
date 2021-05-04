import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {getProducts, getBraintreeClientToken} from './apiCore';
import Card from './Card';
import {isAuthenticated} from '../auth'
import { Link } from 'react-router-dom';

const Checkout = ({products}) => {
    const [ data, setData ] = useState({
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    })

    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token

    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(data => {
            if(data.error){
                setData({...data, error: data.error})
            } else {
                setData({...data, clientToken: data.clientToken})
            }
        })
    };


    useEffect(() => {
        getToken(userId, token)
    }, []);

    const totalItem = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0)
    }

    const showCheckout = () => {
        
        return  isAuthenticated() ? (
            <button className="btn btn-success">Check Out</button>     
        ):(
            <Link to="/signin">
                <button className="btn btn-primary">
                    Sign In
                </button>
            </Link>
        )
    }

    return (
        <div>
            <h2>Total: ${totalItem()}</h2>
           {showCheckout()}
        </div>
    )
}

export default Checkout;