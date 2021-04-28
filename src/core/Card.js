import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Images from './Images'
import './card.css'
import { addItem } from './cartHelpers';


const Card = ({product,  showViewedProductButton = true,  showAddToCartButton = true}) => {
    const [redirect, setRedirect] = useState(false)
    
    const showViewedButton = ( showViewedProductButton) => {
        return (
            showViewedProductButton && (
                <Link to={`/viewedproduct/${product._id}`} data-tip="Quick View">
                    <i className="fa fa-search"></i>
                </Link>
            )
            
        )
    }

    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true)
        })
    }

    const shouldRedirect = redirect => {
        if(redirect) {
            return <Redirect to="/cart"/>
        }
    }
    
    const cartButton = ( showAddToCartButton) => {
        return showAddToCartButton && (
            
              <Link  to="#" onClick={addToCart} data-tip="Add to Cart" ><i className="fa fa-shopping-cart"></i></Link>
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
            {shouldRedirect(redirect)}
        <div className="row">
                <div className="product-grid">
                    <div className="product-image">
                        <Link to="#">
                        <Images item={product} url="product" className="pic-1"/>
                        </Link>
                        <ul className="social">
                            <li>{showViewedButton(showViewedProductButton)}</li>
                            <li ><Link to="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></Link></li>
                            <li>{ cartButton( showAddToCartButton)}</li>
                        </ul>
                        <span className="product-new-label">Sale</span>
                    </div>
                    <ul className="rating mb-2">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star disable"></li>
                    </ul>
                    <div className="product-content mb-3">
                        <h3 className="title"><Link to="#">{product.description.substring(0, 50)}</Link></h3>
                        <div className="price">${product.price}
                            <span>{stock(product.quantity)}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>

   
        
    )
}
export default Card;
