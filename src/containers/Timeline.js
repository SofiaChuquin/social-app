import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost, getUser } from '../actions';
import Posts from '../components/Post';
import '../components/Timeline.css';

class Timeline extends Component {
  static propTypes = {
    createPost: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      authorization_token: PropTypes.string,
    }).isRequired,
  };

  state = { description: '', user_id: '' }

  componentDidMount = () => {
    const token = JSON.parse(localStorage.getItem('authorization_token'));
    this.props.getUser(token);
    console.log(this.props.user, '1')

  }

  onChangeInput = (e) => {
    this.setState({ description: e.target.value });
  }

  submitPost = () => {
    const token = JSON.parse(localStorage.getItem('authorization_token'));
    console.log(this.props.user, '2')
    const values = {
      user_id: this.props.user.id,
      description: this.state.description,
      likes: 0
    }
    this.props.createPost(values, token);
    this.setState({ description: '' });
  }

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
          <Link to="/log_in" onClick={this.logOut} className="TimelineLogout">
            Cerrar sesión
          </Link>
        </div>
        <Posts submitPost={this.submitPost} onChangeInput={this.onChangeInput} description={this.state.description} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { createPost, getUser })(Timeline);
