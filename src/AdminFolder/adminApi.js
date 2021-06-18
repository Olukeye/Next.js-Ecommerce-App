import { API } from "../config"


// method for admin API
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => 
        console.log(err));
};



// method for admin API to create product
export const createProduct = (userId, token, product)=> {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    // if we get a response, we return the response in json
    .then(response => {
        return response.json()
    })
    // ... and if we get an error, it catch and log it out !
    .catch(err => {
        console.log(err)
    });
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
    .then(res => {
        return res.json();
    })
    .catch(err => {
        console.log(err);
    })
}