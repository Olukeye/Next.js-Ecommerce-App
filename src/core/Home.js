import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {  getProducts } from './apiCore';
import Card from './Card';
// import './card.css';
import Search from './Search';


const Home = () => {
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArriavl] = useState([])
  const [error, setError] = useState(false)

  // dispaly products sold on the home page 
const loadProductsBySell = () => {
  getProducts('sold').then(data => {
    if(data.error) {
      setError(data.error)
    } else {
      setProductsBySell(data)
    }
  })
}

// dispaly products by arriaval on the home page 
const loadProductsByArrival = () => {
  getProducts('createdAt').then(data => {
    if(data.error) {
      setError(data.error)
    } else {
      setProductsByArriavl(data)
    }
  })
}

useEffect(() => {
  loadProductsByArrival()
  loadProductsBySell()
}, [])


  return (
    <Layout title='' description='Home of the best  Nigerian online native fabrics'  className="container">
      <Search />
    <h2 className="mb-4">Best Sales</h2>
    <hr/>
      <br/>
    < div className="row justify-content-md-center">
    {productsBySell.map((product, i) => (
      <div  key={i} className="col-md-4 ml-auto mb-4">
        <Card  product={product} />
      </div>
    ))}
    </div>
    
    <div id="toast"></div>
    <div id="toast-cart"></div>
    <h2 className="mb-4 mt-5">New Arrivals</h2>
    <hr/>
  <br/>
    < div className="row">
    {productsByArrival.map((product, i) => (
       <div  key={i}  className="col-md-4 ml-auto mb-4">
       <Card product={product} />
     </div>
    ))}
    </div>
  </Layout>
  )
}

export default Home;