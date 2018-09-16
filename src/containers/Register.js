import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import RegisterForm from '../components/Register';
import '../components/Session.css';

class Register extends Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      authorization_token: PropTypes.string,
    }).isRequired,
  };

  state = { email: '', password: '', name: '', confirmPassword: '' }

  submitRegister = (e) => {
    e.preventDefault();
    const { email, name, password, confirmPassword } = this.state;
    const allFields = email && name && password && confirmPassword;
    const samePasswords = password === confirmPassword;
    const validateEmail = /^\w+(\.-?\w+)*@\w+(\.-?\w+)*(\.\w{2,3})+$/.test(email);
    const minPassword = password.length > 5;
    if (allFields && samePasswords) {
      if (validateEmail && minPassword) {
        this.registerUser(email, name, password);
      } else {
        validateEmail ? alert('La contraseña debe ser de 6 dígitos como mínimo.') : alert('Formato de correo electrónico inválido.');
      }
    } else {
      allFields ? alert('Las contraseñas no coinciden.') : alert('Completa todos los campos.');
    }
  }

  onChangeInput = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  registerUser = (email, name, password) => {
    this.props.createUser(email, name, password).then((response) => {
      if (this.props.user.authorization_token) {
        this.setState({ email: '', password: '', name: '', confirmPassword: '' });
        localStorage.setItem('authorization_token', JSON.stringify(this.props.user.authorization_token));
        this.props.history.push('/timeline');
      } else {
        alert('Registro fallido.');
      }
    })
  }

  render() {
    return (
      <div className="SessionContainer">
        <RegisterForm submitRegister={this.submitRegister} onChangeInput={this.onChangeInput} {...this.state} />
        <Link to="/log_in" className="SessionLink">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { createUser })(Register);
