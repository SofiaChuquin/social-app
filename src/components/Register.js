import React from 'react';
import PropTypes from 'prop-types';

const Register = props => (
  <form className="SessionForm" onSubmit={e => props.submitRegister(e)}>
    <h1 className="SessionTitle">Registro</h1>
    <label>Nombre</label>
    <input className="SessionInput" value={props.name} onChange={e => props.onChangeInput(e, 'name')} />
    <label>Correo electrónico</label>
    <input className="SessionInput" value={props.email} onChange={e => props.onChangeInput(e, 'email')} />
    <label>Contraseña</label>
    <input className="SessionInput" value={props.password} onChange={e => props.onChangeInput(e, 'password')} type="password" />
    <label>Confirmar contraseña</label>
    <input className="SessionInput" onChange={e => props.onChangeInput(e, 'confirmPassword')} type="password" />
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
