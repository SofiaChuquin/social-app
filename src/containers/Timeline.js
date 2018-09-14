import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Posts from '../components/Timeline';
import '../components/Timeline.css';

class Timeline extends Component {
  static propTypes = {
    user: PropTypes.shape({
      authorization_token: PropTypes.string,
    }).isRequired,
  };

  logOut = () => {
    localStorage.removeItem('authorization_token');
  }

  render() {
    if (!(localStorage.getItem('authorization_token'))) {
      return <Redirect to='/log_in' />
    }
    return (
      <div className="TimelineContainer">
        <div className="TimelineHeader">
          <h2>Bienvenido, Sofia</h2>
          <Link to="/log_in" onClick={this.logOut}>
            Cerrar sesión
          </Link>
        </div>
        <Posts />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {})(Timeline);
