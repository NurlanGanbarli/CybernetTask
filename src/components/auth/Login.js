import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const { username, password } = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(username, password);
    }

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/products'/>
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


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { login })(Login)
