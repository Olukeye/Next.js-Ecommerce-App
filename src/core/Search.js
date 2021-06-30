import React, { useEffect, useState } from 'react'
import {  getCategories, list } from './apiCore';
import Card from './Card'


const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        searched: false
    });

    //  destructuring the state 
    const {categories, category, search, results, searched} = data;

    const loadCategories = () => {
        getCategories().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                setData({ ...data, categories:data });
            }
        });
    };
    useEffect(() => {
        loadCategories();
    }, []);



    const searchSubmit = e => {
        e.preventDefault()
        searchData()
    }

    const searchData = () => {
        // console.log(search, category);
        if(search) {
            list({search: search || undefined, category: category }).then(
                res => {
                    if(res.error) {
                        console.log(res.error)
                    } else {
                        setData({ ...data, results: res, searched: true });
                    }
                }
            )
        }
    };

    const handleChange = name => e => {
        setData({ ...data, [name]: e.target.value, searched: false})
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
        <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                <input className="search_input" 
                onChange={handleChange("search")} type="text" name="" placeholder="Search...">
                    </input>
                {/* <a href="#" className="search_icon"><i className="fas fa-search"></i></a> */}
                </div>
            </div>
            </div>
        </form>
     );

    //  feedback if product is found || not found!
    const feedbackMessage = (serached, results) => {
        if(serached && results.length > 0) {
            return `Found  ${results.length} products`;
        }
        if(searched && results.length < 1) {
            return `Product not found!`;
        }
    }

    //  search for products in the backend and populate it on the home page 
     const searchProducts = (results = []) => {
         return (
            <div>
                <h6 className="mt-4 mb-4">
                    {feedbackMessage(searched, results)}
                </h6>
                 <div className="row">
                 {results.map((product, i) => (
                     <Card key={i} product={product} />
                 ))}
             </div>
            </div>
         )
     }


     return (
      <div className="row">
          <div className="container mb-3">{searchForm()}</div>
          <div className="container-fluid mb-3">
            {searchProducts(results)}
          </div>
      </div>   
      
     )
}



export default Search;
