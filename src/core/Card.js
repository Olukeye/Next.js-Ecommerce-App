import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images'
import './card.css'

const Card = ({product,  showViewedProductButton = true}) => {
    const showViewedButton = ( showViewedProductButton) => {
        return (
            showViewedProductButton && (
             <center><button className="btn btn-outline-secondary mt-2 mb-2">View Product</button></center>   
            )
        )
    }
    
    const cartButton = () => {
        return (
            <button className="btn btn-outline-warning mt-2 mb-2">
               Add to Cart
            </button>
        )
    }
    const stock = (quantity) => {
        return quantity > 0 ? (
            <span className="badge badge-secondary badge-pill">Avalaible</span>
        ) : (
            <span className="badge badge-secondary badge-pill">Off stock</span>

        )
    }
    return (
        <div className="col-lg-4 mb-4">
            <div className="card">
            <div className="card-header">{product.name}</div>
                <span id="heart" className="heart"><i className="fa fa-heart"></i></span>
                    <Images item={product} url="product" className="first-image" />
                    <div className="card-body" style={{width: '18rem'}}>
                    <Link to={`/viewedproduct/${product._id}`} >
                        {showViewedButton( showViewedProductButton)}
                        {stock(product.quantity)}
                    </Link>
                   <hr/>
                    <p className="lead mt-2">{product.description.substring(0, 50)}</p>
                   <div>
                   <p className="9">${product.price}
                     <span style={{float: 'right'}}>
                         {cartButton()}
                    </span>
                    </p>
                   </div>
                   </div>
                </div> 
                </div>
    )
}


export default Card;