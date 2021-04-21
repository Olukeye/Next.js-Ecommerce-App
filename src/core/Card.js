import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images'


const Card = ({product}) => {
    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                    <Images item={product} url="product" />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <Link to="/">
                        <button className="btb btn-outline-primary mt-2 mb-2">
                            View  to Card
                        </button>
                    </Link>
                    <button className="btb btn-outline-primary mt-2 mb-2">
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Card;