import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <form className="LoginForm">
        <h1 className="LoginTitle">Iniciar sesión</h1>
        <label>Email</label>
        <input className="LoginInput" />
        <label>Contraseña</label>
        <input className="LoginInput" />
        <button type="submit" className="LoginButton">Ingresar</button>
      </form>
    );
  }
}

export default Login;
