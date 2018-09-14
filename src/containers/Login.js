import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import LoginForm from '../components/Login';
import '../components/Login.css';

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      authorization_token: PropTypes.string,
    }).isRequired,
  };

  state = { email: '', password: '' }

  submitLogin = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password).then((response) => {
      const { user } = this.props;
      if (user.authorization_token) {
        localStorage.setItem('authorization_token', JSON.stringify(user.authorization_token));
        this.props.history.push('/timeline');
      } else {
        alert('Email o contraseña incorrectos');
      }
    });
  }

  onChangeInput = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className="LoginContainer">
        <LoginForm submitLogin={this.submitLogin} onChangeInput={this.onChangeInput} {...this.state} />
        <Link to="/register" className="LoginLink">
          Aún no tienes una cuenta? Regístrate
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

export default connect(mapStateToProps, { loginUser })(Login);
