import React from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <form className="SessionForm" onSubmit={e => props.submitLogin(e)}>
    <h1 className="SessionTitle">Iniciar sesión</h1>
    <label>Correo electrónico</label>
    <input className="SessionInput" value={props.email} onChange={e => props.onChangeInput(e, 'email')} required type="email" />
    <label>Contraseña</label>
    <input className="SessionInput" value={props.password} onChange={e => props.onChangeInput(e, 'password')} required type="password" />
    <button type="submit" className="SessionButton">Ingresar</button>
  </form>
);

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
