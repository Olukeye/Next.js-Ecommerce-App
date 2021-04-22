import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {  getProducts } from './apiCore';
import Card from './Card'
import './card.css'


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
    <Layout title='Home Page' description='Fashion Store' className="container">
      <div id="toast"></div>
    <div id="toast-cart"></div>
    <h2 className="mb-4">Best Sales</h2>
    <hr/>
      <br/>
    < div className="row">
    {productsBySell.map((product, i) => (
      <Card key={i} product={product} />
    ))}
    </div>
    
    <div id="toast"></div>
    <div id="toast-cart"></div>
    <h2 className="mb-4">Best Sales</h2>
    <hr/>
  <br/>
    < div className="row">
    {productsByArrival.map((product, i) => (
      <Card key={i} product={product} />
    ))}
    </div>
  </Layout>
  )
}

export default Home;