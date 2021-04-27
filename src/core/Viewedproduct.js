import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { read, listRelated, getProducts } from './apiCore'
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
        description={
            product && product.description && 
            product.description.substring(0, 50)
        }
          className="container">

            <div className="row">
                <div className="col-8">
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
            </div>    
      </Layout>
      )
}

export default Viewedproduct;


