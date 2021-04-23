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
            <span className="input-group-text  ml-3"  >
                {/* <div className="input-group ">
                    </div> */}
                    <input type="search" className="form-control"
                    onChange={handleChange("search")}
                    placeholder="Search Product"/>
        
                <div className="btn input-group-append" style={{border : 'none'}}>
                    <button className="input-group-text">Search</button>
                </div>
            </span>
        </form>
     );
     
     return (
      <div className="row">
          <div className="container mb-3">{searchForm()}</div>
          {JSON.stringify(results)}
      </div>   
     )
}



export default Search;
