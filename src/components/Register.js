import React from 'react';
import PropTypes from 'prop-types';

const Register = props => (
  <form className="SessionForm" onSubmit={e => props.submitRegister(e)}>
    <h1 className="SessionTitle">Registro</h1>
    <label>Nombre</label>
    <input className="SessionInput" value={props.name} onChange={e => props.onChangeInput(e, 'name')} required />
    <label>Correo electrónico</label>
    <input className="SessionInput" value={props.email} onChange={e => props.onChangeInput(e, 'email')} required type="email" />
    <label>Contraseña</label>
    <input className="SessionInput" value={props.password} onChange={e => props.onChangeInput(e, 'password')} required type="password" />
    <label>Confirmar contraseña</label>
    <input className="SessionInput" onChange={e => props.onChangeInput(e, 'confirmPassword')} required type="password" />
    <button type="submit" className="SessionButton">Registrarme</button>
  </form>
);

Register.propTypes = {
  submitRegister: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
};

export default Register;
