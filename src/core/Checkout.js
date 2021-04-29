import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore';
import Card from './Card';
import {isAuthenticated} from '../auth'
import { Link } from 'react-router-dom';

const Checkout = ({products}) => {
    const totalItem = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count *  nextValue;
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