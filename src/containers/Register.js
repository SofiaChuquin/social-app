import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        Este es el register
        <Link to="log_in">
          <button>Go to login</button>
        </Link>
      </div>
    );
  }
}

export default Register;
