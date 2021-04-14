import React, { useState } from 'react'
import Layout from '../core/Layout'
import { Link } from 'react-router-dom'
import {signup} from '../auth'
import './signup.css';



const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        sucess: false
    })

    const {name, email, password, error, success} = values

    const handleChange = name => event => {
        setValues({...values, error:false, [name]: event.target.value})
    }

    
    const clickSubmit = event => {
        event.preventDefault();
        setValues({...values, error:false})
        signup({name, email, password})
        .then(data => {
            if(data?.error)  {
                setValues({...values, error: data.error, success: false})
            } else { 
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                })
            }
            
        })
    }
 

    const signUpForm = () => (
        <form>
        <div className="form-group">
           <input type="text" name="name" onChange={handleChange('name')} value={name} className="form-control my-input" id="name" placeholder="Name" />
        </div>
        <div className="form-group mt-3">
           <input type="email" name="email" onChange={handleChange('email')} className="form-control my-input"  value={email} id="email" placeholder="Email"/>
        </div>
        <div className="form-group mt-3">
           <input type="password" min="0" name="password" onChange={handleChange('password')} value={password} id="password"  className="form-control my-input" placeholder="password"/>
        </div>
        <div className="text-center mt-2">
           <button  onClick={clickSubmit} className=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
        </div>
        <div className="col-md-12 ">
           <div className="login-or">
              <hr className="hr-or"/>
              <span className="span-or">or</span>
           </div>
        </div>
        <div className="form-group">
           <Link to="#" className="btn btn-block g-button">
           <i className="fa fa-google"></i> Sign up with Google
           </Link>
        </div>
        <p className="small mt-3">By signing up, you are indicating that you have read and agree to the <Link to="#" className="ps-hero__content__link">Terms of Use</Link> and <Link to="#">Privacy Policy</Link>.
        </p>
     </form>
    )
    const errorMessage = () =>(
        <div className='alert alert-danger' style={{display: error ? '' : 'none'}}>
         {error}
        </div>
    )

    const successMessage = () => (
        <div className='alert alert-info' style={{display: success ? '' : 'none'}}>
         Account has been created succesfully, proceed to <Link to='/signin'>Signin</Link> please
        </div>
    )
    
    return (
        <Layout title='Signup Page' description='Signup to E-commerce Node-React App'
         className='container col-md-6 offset-md-3'>
             
            {errorMessage()}
            {successMessage()}
            {signUpForm()}
        </Layout>
    )
}

export default  Signup;