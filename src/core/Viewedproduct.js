import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { read, listRelated } from './apiCore'
import './card.css';
import { Link } from 'react-router-dom';
import Card from './Card'
import Images from './Images'

const Viewedproduct = (props, { showViewedProductButton = true}) => {
    const [ product, setProduct ] = useState({});
    const [ relatedProduct, setRelatedProduct ] = useState([]);
    const [ error, setError ] = useState(false);

    const singleViewed = productId => {
        read(productId).then(data => {
            if(data.error) {
                setError(data.error);
            } else {
                setProduct(data);
            }
            // fetch related product to desplay while viewing 
            listRelated(data._id).then(data => {
                if(data.error) {
                    setError(data.error);
                } else {
                    setRelatedProduct(data);
                }
            })
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        singleViewed(productId);
    }, []);
    
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
        <Layout title={product && product.name} 
          className="container">
{/* 
            <div className="row">
                <div className="col-8 " className="fixed">
                    {product && product.description && (
                        <Card product={product} 
                        showViewedProductButton={false} />
                        )}
                </div>

                <div className="col-4">
                    <h4>Related Products</h4><hr/>
                  {relatedProduct.map((p, i)=> (
                      <Card key={i} product={p} />
                  ))}
                  </div>
            </div> */}

            <div className="row">
                <div className="col-4">        
    <div className="card">
        <div className="card-header">{product.name}</div>
                <span id="heart" className="heart"><i className="fa fa-heart"></i></span>
                    <Images item={product} url="product" className="first-image" />
                    <div className="card-body" style={{width: '18rem'}}>
                    <Link to={`/viewedproduct/${product._id}`} >  
                        {stock(product.quantity)}
                    </Link>
                <hr/>
                    <p className="lead mt-2">{product.description}</p>
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

                    <div className="col-8">
                
                        <h1> hey there</h1>
                    </div>
            </div>
      </Layout>
      )
}

export default Viewedproduct;


