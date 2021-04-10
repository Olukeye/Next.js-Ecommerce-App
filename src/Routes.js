import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoute';
import Profile from './user/Profile';
import AdminProfile from './user/AdminProfile';
import AdminRoute from './auth/AdminRoute';
import Addcategory from './AdminFolder/Addcategory';







const Routes = () => {
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Home} />    
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/profile" exact component={Profile} />
                <AdminRoute path="/adminprofile" exact component={AdminProfile} />
                <AdminRoute path="/addcategory" exact component={Addcategory} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;