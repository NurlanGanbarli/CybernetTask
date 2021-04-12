import React, { useState } from 'react';
import axios from 'axios'

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const { username, password } = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        try {
            const res = await axios.get('http://localhost:5000/user', config)
            console.log(res);
            if (res.data.username === username && res.data.password === password) {
                console.log('truee');
                props.history.push('/products')
            } else {
            
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="login-page">
            <div className='content'>
            <h3>Sign in to your account</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' className='form-control' id='username' name='username' value={username} onChange={e => onChange(e)} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' id='password' name='password' value={password} onChange={e => onChange(e)} required/>
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
      </div>
    </div>
    )
}
