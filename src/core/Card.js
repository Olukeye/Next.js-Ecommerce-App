import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Images from './Images'
import './card.css'
import { addItem , updateItem, deleteItem } from './cartHelpers';


const Card = (
    // props
    {product,  showViewedProductButton = true,
     showAddToCartButton = true,
     cartUpdate = false,
     deleteButton = false
    }) => {

        // Handle state
    const [redirect, setRedirect] = useState(false)
    const [ count,  setCount ] = useState(product) //this update number of qauntity in the cart from on the data in the local storage
    
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
            <span className="badge badge-secondary badge-pill">Available</span>
        ) : (
            <span className="badge badge-secondary badge-pill">Off stock</span>

        )
    }

    const handleChange = productId => e => {
        setCount(e.target.value < 1 ? 1 : e.target.value)
        if(e.target.value >= 1) {
            updateItem(productId, e.target.value)
        }
    }

    const showCartUpdate = cartUpdate => {
        return cartUpdate && (
           <div>
               <div className="input-group mb-3">
                   <div className="input-group-prepend">
                       <span className="input-group-text">
                           Quantity
                       </span>
                   </div>
                   <input type="number" className="form-control"
                     value={count} onChange={handleChange(product._id)}>
                </input>
               </div>
           </div>
        )
    }

    const showDeleteButton = deleteButton => {
        return (deleteButton  && (
            <button 
                onClick={() => deleteItem(product._id)}
                className='btn btn-outline-danger mt-2 mb-2'
            >Delete item</button>
        ))
    }

    return (
    
    <div className="container">
            {shouldRedirect(redirect)}
        <div className="row">
                <div className="product-grid ">
                    <div className="product-image">
                        <Link to="#">
                        <Images item={product} url="product" className="pic-1"/>
                        </Link>
                        <ul className="social">
                            <li>{showViewedButton(showViewedProductButton)}</li>
                            <li>{cartButton(showAddToCartButton)}</li>
                        </ul>
                    </div>
                    <ul className="rating mb-3">
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
                            <h6>{showCartUpdate(cartUpdate)}<span>
                            {showDeleteButton(deleteButton)}</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Card;
