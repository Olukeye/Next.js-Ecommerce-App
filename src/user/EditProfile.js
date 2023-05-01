import React, {useState, useEffect} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { Redirect} from 'react-router-dom';
import { read, update, updateUser } from './userApi'

const EditProfile = ({match}) => {
    // state
    const [values, setValues] = useState({
        name: "",
        email:  "",
        password:  "",
        error: false,
        success: false
    });

    // distructure
    const { token } = isAuthenticated()
    const {name, email, password, error, success} = values;


    const init = (userId) => {
        // console.log(userId)
        read(userId, token).then(data => {
            if(data.error) {
                setValues({...values, error: true })
            } else {
                setValues({...values, name: data.name, email: data.email })
            }
        })
    };

    useEffect(() => {
        init(match.params.userId)
    }, []);

    
    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, {name, email, password}).then(data => {
            if(data.error) {
                alert(error)
            } else {
                updateUser(data, () => {
                    setValues({ ...values, name: name, email: data.email, success: true })
                })
            }
        })
    };
    const redirectUser = (success) => {
        if(success) {
            return <Redirect to='/Profile'/>
        }
    }
    
    const updateProfile = (name, email, password) => (
        <form>
        <div className='form-group'>
            <label className='text-muted'>Name</label>
            <input
             onChange={handleChange('name')}
              type='text' className='form-control'
            value={name} />

        </div>
        <div className='form-group'>
            <label className='text-muted'>Email</label>
            <input
             onChange={handleChange('email')}
             type='email' className='form-control'
             value={email} />
        </div>
        <div className='form-group'>
            <label className='text-muted'>Password</label>
            <input
             onChange={handleChange('password')}
             type='password' className='form-control'
             value={password} />
        </div>
        <button onClick={clickSubmit} className ='btn btn-secondary'>Submit</button>
        </form>
    )

    return (
        <Layout title='Profile' description='Update Profile' className="container">
         <h2 className="mb-4">Update Profile</h2>
         {updateProfile(name, email, password)}
         {redirectUser(success)}
      </Layout>
      )
};

export default EditProfile;