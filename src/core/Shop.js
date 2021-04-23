import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Card from './Card'
import { getCategories,  getFilteredProducts  } from './apiCore'
import Checkbox from './Checkbox';
import './card.css'




const Shop = () => {

    const [myFilters, setMyFilters] = useState({
        filters: {category: []}
    })
    const [skip, setSkip ] = useState(0)
    const [size, setSize ] = useState(0)
    const [limit, setLimit ] = useState(6)
    const [error, setError ] = useState(false)
    const [categories, setCategories ] = useState([])
    const [filteredResults, setFilteredResults ] = useState([])


    const init = () =>{
        getCategories().then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setCategories(data)
            }
        })
       };
    //   so basically this is to get all the products and populate in on the shop page 
     const loadFilteredResults = (newFilters) => {
         getFilteredProducts(skip, limit, newFilters).then(data =>{
             if(data.error) {
                 setError(data.error)
             } else {
                 setFilteredResults(data.data)
                 setSize(data.size)
                 setSkip(0)
             }
         })
    }
    // load more product function
    const loadProducts = () => {
        let toSkip = skip + limit
        getFilteredProducts(toSkip, limit,myFilters.filters).then(data =>{
            if(data.error) {
                setError(data.error)
            } else {
                setFilteredResults([...filteredResults, ...data.data])
                setSize(data.size)
                setSkip(0)
            }
        })
   }

   const loadProductsButton =()=>{
           if(size > 0 || size >= limit) {
               return (
                <button onClick={loadProducts} className="btn 
                 mb-5">Load More </button>
               )
           }
        }

       useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters)
     }, [])


    
    //  handle the filter methods
     const handleFilters = (filters, filterBy) => {
        //  console.log('SHOP', filters, filterBy)
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters


        loadFilteredResults(myFilters.filters)   // this will load the result gotten from back end and display on the shop page
        setMyFilters(newFilters);
     };

    return (
        <Layout title='Home Page' description='Fashion Store' className="container-fluid">
         <div className="row">
         <div className="col-4 mb-4">
                 <ul>
                 <Checkbox categories={categories} handleFilters={filters => handleFilters(filters, 'category')} />
                 </ul>
             </div>
              <div className="col-8">
                  <div className="row">
                     {filteredResults.map((product, i) => (
                    <Card key={i} product={product} />
                        ))}
                  </div>
                  <hr/>
                  {loadProductsButton ()}
             </div>
         </div>
      </Layout>
      )
}


export default Shop;
