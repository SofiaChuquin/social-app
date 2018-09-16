import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import LoginForm from '../components/Login';
import '../components/Session.css';

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
    const validateEmail = /^\w+(\.-?\w+)*@\w+(\.-?\w+)*(\.\w{2,3})+$/.test(this.state.email);
    if (this.state.email && this.state.password && validateEmail) {
      this.props.loginUser(this.state.email, this.state.password).then((response) => {
        const { user } = this.props;
        if (user.authorization_token) {
          this.setState({ email: '', password: '' });
          localStorage.setItem('authorization_token', JSON.stringify(user.authorization_token));
          this.props.history.push('/timeline');
        } else {
          alert('Correo o contraseña incorrectos.');
        }
      });
    } else {
      validateEmail ? alert('Completa todos los campos.') : alert('Formato de correo electrónico inválido.');
    }
  }

  onChangeInput = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className="SessionContainer">
        <LoginForm submitLogin={this.submitLogin} onChangeInput={this.onChangeInput} {...this.state} />
        <Link to="/register" className="SessionLink">
          ¿Aún no tienes una cuenta? Regístrate
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

export default withRouter(connect(mapStateToProps, { loginUser })(Login));
