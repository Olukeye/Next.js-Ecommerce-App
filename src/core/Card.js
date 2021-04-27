import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images'
import './card.css'

const Card = ({product,  showViewedProductButton = true}) => {
    
    const showViewedButton = ( showViewedProductButton) => {
        return (
            showViewedProductButton
            
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
    
    <div className="container">
        <div className="row">
            {/* <div className="col-md-3 col-sm-6"> */}
                <div className="product-grid">
                    <div className="product-image">
                        <Link to="#">
                        <Images item={product} url="product"  className="pic-1"/>
                        </Link>
                        <ul className="social">
                            <li><Link to={`/viewedproduct/${product._id}`} data-tip="Quick View"><i className="fa fa-search"> {showViewedButton( showViewedProductButton)}</i></Link></li>
                            <li><Link to="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></Link></li>
                            <li><Link to="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></Link></li>
                        </ul>
                        <span className="product-new-label">Sale</span>
                        <span className="product-discount-label">20%</span>
                    </div>
                    <ul className="rating">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star disable"></li>
                    </ul>
                    <div className="product-content">
                        <h3 className="title"><Link to="#">{product.description.substring(0, 50)}</Link></h3>
                        <div className="price">${product.price}
                            <span>{stock(product.quantity)}</span>
                        </div>
                        <Link className="add-to-cart" to="">+ Add To Cart</Link>
                    </div>
                </div>
            </div>
            </div>

   
        
    )
}
export default Card;



{/* // <div className="col-lg-4 mb-4">
        //     <div className="card">
        //     <div className="card-header">{product.name}</div>
        //         <span id="heart" className="heart"><i className="fa fa-heart"></i></span>
        //             <Images item={product} url="product" className="first-image" />
        //             <div className="card-body" style={{width: '18rem'}}>
        //             <Link to={`/viewedproduct/${product._id}`} >
        //                 {showViewedButton( showViewedProductButton)}
        //                 {stock(product.quantity)}
        //             </Link>
        //            <hr/>
        //             <p className="lead mt-2">{product.description.substring(0, 50)}</p>
        //            <div>
        //            <p className="9">${product.price}
        //              <span style={{float: 'right'}}>
        //                  {cartButton()}
        //             </span>
        //             </p>
        //            </div>
        //            </div>
        //         </div> 
        //         </div> */}
