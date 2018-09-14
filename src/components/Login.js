import React from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <form className="LoginForm" onSubmit={e => props.submitLogin(e)}>
    <h1 className="LoginTitle">Iniciar sesión</h1>
    <label>Email</label>
    <input className="LoginInput" value={props.email} onChange={e => props.onChangeInput(e, 'email')} required type="email" />
    <label>Contraseña</label>
    <input className="LoginInput" value={props.password} onChange={e => props.onChangeInput(e, 'password')} required type="password" />
    <button type="submit" className="LoginButton">Ingresar</button>
  </form>
);

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
