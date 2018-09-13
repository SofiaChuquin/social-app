import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login';
import '../components/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="LoginContainer">
        <LoginForm />
        <Link to="/register" className="LoginLink">
          Aún no tienes una cuenta? Regístrate
        </Link>
      </div>
    );
  }
}

export default Login;
