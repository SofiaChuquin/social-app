import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/Register';
import '../components/Session.css';

class Register extends Component {
  state = { email: '', password: '', name: '', confirmPassword: '' }

  submitRegister = (e) => {
    e.preventDefault();
    // this.props.loginUser(this.state.email, this.state.password).then((response) => {
    //   const { user } = this.props;
    //   if (user.authorization_token) {
    //     localStorage.setItem('authorization_token', JSON.stringify(user.authorization_token));
    //     this.props.history.push('/timeline');
    //   } else {
    //     alert('Email o contraseña incorrectos');
    //   }
    // });
  }

  onChangeInput = (e, field) => {
    this.setState({ [field]: e.target.value });
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

export default Register;
