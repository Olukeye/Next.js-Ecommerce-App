import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images'
import './card.css'

const Card = ({product}) => {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card">
            <div className="card-header">{product.name}</div>
                <span id="heart" className="heart"><i className="fas fa-heart"></i></span>
                    <Images item={product} url="product" className="first-image" />
                    <div className="card-body" style={{width: '18rem'}}>
                    <Link to="#" >
                       <center>View Product</center>
                    </Link>
                   <hr/>
                    <p>{product.description.substring(0, 50)}</p>
                    <p>${product.price}</p>
                </div> 
                </div>
            </div>
    )
}


export default Card;