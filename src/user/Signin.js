import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../core/Layout'
import {signin, authenticate, isAuthenticated } from '../auth'


const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false,
    })

    const {email, password, error, loading, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error:false, [name]: event.target.value});
    };

    
    const clickSubmit = event => {
       event.preventDefault();
       setValues({ ...values, error: false, loading: true });
       signin({ email, password }).then(data  => {
           if(data?.error) {
               setValues({ ...values, error: data.error, loading: false });
           } else {
            //when the user signin successfully , it redirect them to their dashboard
                authenticate(data, () => {
                setValues({
                    ...values,
                    redirectToReferrer: true
                });
            })
           }
       })
    }

    const signInForm = () => (
        <form>
            <div className='form-group'>
                <label className='text-muted'>Email</label>
                <input
                 onChange={handleChange('email')}
                  type='email' className='form-control'
                value={email} />
            </div>
            
            <div className='form-group'>
                <label className='text-muted'>Password</label>
                <input onChange={handleChange('password')}
                 type='password' className='form-control' 
                value={password}/>
            </div>

            <button onClick={clickSubmit} className ='btn btn-secondary'>Submit</button>
        </form>
    )
    const errorMessage = () =>(
        <div className='alert alert-danger'
         style={{display: error ? '' : 'none'}}>
         {error}
        </div>
    )

    const successLoading = () => 
        loading && (
            <div className='alert alert-info'>
                <h3>Loading...</h3>
            </div>
            )

    const redirectUser = () => {
        if(redirectToReferrer) {
            if(user && user.role === 1) {
                return <Redirect to='/adminprofile' />;
            } else{
                return <Redirect to="/profile" />;
            }
        }
        
        if(isAuthenticated()) {
            return <Redirect to='/' />;
        }
    };

    return (
        <Layout title='' description='Login'
         className='container col-md-6 offset-md-3'>
             {errorMessage()}
             {successLoading()}
             {signInForm()}
             {redirectUser()}
        </Layout>
    )
}

export default  Signin