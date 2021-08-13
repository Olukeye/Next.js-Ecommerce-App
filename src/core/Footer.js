import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-left col-md-4 ml-auto">
          <p className="about">
            <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
          </p>
          <div className="icons">
            <a href="https://github.com/Olukeye"><i className="fa fa-github"></i></a>
            <a href="https://twitter.com/Tyjani3"><i className="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/seun-olukeye-9a1b26128/"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-google-plus"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-center col-md-4 ml-auto">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span> Street name and number</span> Ifako Ijaiye, Lagos</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> (+234) 080 3770 5238 </p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="seunolukeye2000@gmail.com">seunolukeye2000@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right col-md-4 ml-auto ">
          <h2> Company<span> vevi </span></h2>
          <p className="menu">
            <a href="/"> Home</a> |
            <a href="#"> About</a> |
            <a href="#"> Services</a> |
            <a href="#"> Portfolio</a> |
            <a href="/shop">Shop</a> |
            <a href="#"> Contact</a>
          </p>
          <p className="name"> VEVI &copy; 2016</p>
        </div>
      </footer>
    )
}

export default Footer;
