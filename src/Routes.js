import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import Shop from './core/Shop'
import PrivateRoute from './auth/PrivateRoute';
import Profile from './user/Profile';
import AdminProfile from './user/AdminProfile';
import AdminRoute from './auth/AdminRoute';
import Addcategory from './AdminFolder/Addcategory';
import AddProduct from './AdminFolder/AddProduct';
import Viewedproduct from './core/Viewedproduct';
import Cart from './core/Cart'


const Routes = () => {
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Home} />   
                <Route path="/shop" exact component={Shop} />  
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/viewedproduct/:productId" exact component={Viewedproduct} />
                <PrivateRoute path="/profile" exact component={Profile} />
                <AdminRoute path="/adminprofile" exact component={AdminProfile} />
                <AdminRoute path="/addcategory" exact component={Addcategory} />
                <AdminRoute path="/addproduct" exact component={AddProduct} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;