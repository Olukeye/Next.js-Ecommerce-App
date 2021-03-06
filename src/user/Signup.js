import React, { useState } from 'react'
import Layout from '../core/Layout'
import { Link } from 'react-router-dom'
import {signup} from '../auth'



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
            <div className='form-group'>
                <label className='text-muted'>Name</label>
                <input onChange={handleChange('name')} type='text' className='form-control'
                value={name} />
            </div>

            <div className='form-group'>
                <label className='text-muted'>Email</label>
                <input onChange={handleChange('email')} type='email' className='form-control'
                value={email} />
            </div>
            
            <div className='form-group'>
                <label className='text-muted'>Password</label>
                <input onChange={handleChange('password')} type='password' className='form-control' 
                value={password}/>
            </div>

            <button onClick={clickSubmit} className ='btn btn primary'>Submit</button>
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

export default  Signup