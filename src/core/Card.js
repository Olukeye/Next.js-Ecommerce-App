import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images'
import './card.css'

const wishList = () =>{
    var list = document.getElementById("toast");
  list.classList.add("show");
  list.innerHTML = '<i class="far fa-heart wish"></i> Product added to List';
  setTimeout(() => {
    list.classList.remove("show");
  },3000);
}

const addCart =()=>{
    var cart = document.getElementById("toast-cart");
cart.classList.add("show");
cart.innerHTML = '<i class="fas fa-shopping-cart cart"></i> Product added to cartb ';
setTimeout(function(){
  cart.classList.remove("show");
}, 3000);
}


const Card = ({product}) => {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card">
                {/* <div className="card-header">{product.name}</div> */}
                <span id="heart" className="heart"><i onClick={wishList()} className="fas fa-heart"></i></span>
                    <Images item={product} url="product" className="first-image" />
                    <div className="card-body" style={{width: '18rem'}}>


                    <a href="#" onClick={addCart()}><center>Add to cart</center></a>
                    <hr/>
                    <center>
                   <div className="card-header">{product.name}</div>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    </center>
                                        
                    {/* <p>{product.description}</p>
                    <p>${product.price}</p>

                    <Link to="/">
                        <button className="btb btn-outline-primary mt-2 mb-2">
                            View  to Card
                        </button>
                    </Link>
                    <button className="btb btn-outline-primary mt-2 mb-2">
                        Add Product
                    </button> */}

                </div> 
                </div>
            </div>
    )
}


export default Card;