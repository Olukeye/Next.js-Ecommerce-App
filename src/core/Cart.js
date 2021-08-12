import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {getCart } from './cartHelpers';
import { Link} from 'react-router-dom';
import Card from './Card';
import Checkout from './Checkout'




const Cart = ( ) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getCart())
    }, [items]);

    const showCartItems = items => {
        return (
            <div>
                <h2>You have {`${items.length}`} item in your cart</h2>
                <hr/>
                {items.map((product, i) => (
                < Card key={i} product={product} 
                    showAddToCartButton={false}
                    cartUpdate={true} 
                    deleteButton={true}
                /> 
                ))}
            </div>
        )
    }

    

    const emptyCart = () => (
        <h2>
            You do not have item.<br/> 
            <Link to="/shop">Do More Shopping</Link>
       </h2>
    )
    return (
        <Layout title='Shopping Cart' description='Your Cart is Ready' className="container">
        <div className="row">
            <div className="col-8 mb-4">
                {items.length > 0 ? showCartItems(items) : emptyCart()}
            </div>
        
            <div className="col-4">
                <h4 className="">your checkOut</h4>
                <hr/>
                <Checkout products={items} />
            </div>
        </div>
        </Layout>
    )
}
export default Cart;