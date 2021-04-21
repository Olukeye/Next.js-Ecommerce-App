import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images'
import './card.css'

const Card = ({product}) => {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card">
                {/* <div className="card-header">{product.name}</div> */}
                <span id="heart" className="heart"><i className="fas fa-heart"></i></span>
                    <Images item={product} url="product" className="first-image" />
                    <div className="card-body" style={{width: '18rem'}}>
                    <a href="#" ><center>Add to cart</center></a>
                    <hr/>
                    <center>
                   <div className="card-header">{product.name}</div>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    </center>
                </div> 
                </div>
            </div>
    )
}


export default Card;