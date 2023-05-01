// *********** CRUD **************

//1) Add item function
export const addItem = (item, next) => {
    let cart = []
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.push({
            ...item,
            count: 1
        });

        // in order to avoid duplications of added items,we created this functions:
        // remove duplications
        // build Array from new Set and turn it back into array using Array.from
        // new set will only allows a unuque values in it
        // if loop tries to add a particular value twice, it will be ignored

    } cart = Array.from(new Set(cart.map((p) => (p._id)))).map(id => {
        return cart.find(p => p._id === id);
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}

// Get number of  Items in the cart 
export const totalItem = () => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).length;
        }
    }
    return 0;
}

export const getCart = () => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')){
            return JSON.parse(localStorage.getItem('cart'));
        }
    }
    return [];
};

//2) Update the Cart
export const updateItem = (productId, count) => {
    let cart = [];
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        // map through
        cart.map((product, i) => {
            if(product._id === productId) {
                cart[i].count = count;
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

//3) Delete Cart
export const deleteItem = (productId) => {
    let cart = [];
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        // map through
        cart.map((product, i) => {
            if(product._id === productId) {
                cart.splice(i, 1) //Delete just one item from the array of product
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
}
