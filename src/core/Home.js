import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import {  getProducts } from './apiCore';
import Card from './Card'


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
    <Layout title='Home Page' description='Fashion Store' className="container-fluid">
    <h2 className="mb-4">Best Sales</h2>
    < div className="row">
    {productsBySell.map((product, i) => (
      <Card key={i} product={product} />
    ))}
    </div>
    
    <h2 className="mb-4">Best Sales</h2>
    < div className="row">
    {productsByArrival.map((product, i) => (
      <Card key={i} product={product} />
    ))}
    </div>
  </Layout>
  )
}

export default Home;