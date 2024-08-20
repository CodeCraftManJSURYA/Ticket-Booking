import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='Login-root'>
      <div className='Login-Main'>
      <div className='Login-Header'>
                <h1>User Login</h1>
            </div>
        <form>
          <div className='Login-form-group'> 
            <label htmlFor='Email'>Email</label>
            <input  type="text" id="email" name="email" />
          </div>

          <div className='Login-form-group'> 
          <label htmlFor='password'>Password</label>
          <input  type="password" id="password" name="password" />
          </div>

          <a className='forget-password'>Forget password?</a>

          <button type='submit'>Login</button>

          <hr className='right-hr'></hr>
          <p className='or'>or</p>
          <hr className='left-hr'></hr>

          <p className='email-link'>Sign in with email link</p>
          <p className='no-account'>Don't have any account yet?</p>

          <div className='create-page'>
                <Link to="/signup">
                    <a className='create-page-font'>Create an account</a>
                </Link>
            </div>
        </form>

      </div>

    </div>


  )
}

export default Login