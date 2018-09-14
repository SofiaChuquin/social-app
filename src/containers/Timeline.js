import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost, getUser, getPosts, deletePost } from '../actions';
import Posts from '../components/Post';
import '../components/Timeline.css';

class Timeline extends Component {
  static propTypes = {
    createPost: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    user: PropTypes.shape({
      authorization_token: PropTypes.string,
      users: PropTypes.array,
    }).isRequired,
    posts: PropTypes.shape({
      all_posts: PropTypes.array,
    }).isRequired,
  };

  state = { description: '', posts: {} }

  componentDidMount = () => {
    const token = JSON.parse(localStorage.getItem('authorization_token'));
    this.props.getUser(token);
    this.props.getPosts(token);
  }

  onChangeInput = (e) => {
    this.setState({ description: e.target.value });
  }

  submitPost = () => {
    const token = JSON.parse(localStorage.getItem('authorization_token'));
    const values = {
      user_id: this.props.user.id,
      description: this.state.description,
      likes: 0
    };
    this.props.createPost(values, token).then (() => {
      this.props.getPosts(token);
      this.setState({ description: '' });
    });
  }

  logOut = () => {
    localStorage.removeItem('authorization_token');
  }

  removePost = (id) => {
    console.log(id)
    const token = JSON.parse(localStorage.getItem('authorization_token'));
    if (window.confirm('¿Estás seguro de eliminar este post?')) {
      this.props.deletePost(token, id).then(() => {
        this.props.getPosts(token);
      })
    }
  }

  render() {
    if (!this.props.posts.all_posts || !this.props.user.users) { return null; }
    if (!(localStorage.getItem('authorization_token'))) {
      return <Redirect to='/log_in' />
    }
    return (
      <div className="TimelineContainer">
        <div className="TimelineHeader">
          <h2>{`Bienvenido, ${this.props.user.name}`}</h2>
          <Link to="/log_in" onClick={this.logOut} className="TimelineLogout">
            Cerrar sesión
          </Link>
        </div>
        <Posts
          submitPost={this.submitPost}
          onChangeInput={this.onChangeInput}
          removePost={this.removePost}
          description={this.state.description}
          users={this.props.user.users}
          {...this.props}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    posts: state.post,
  };
}

export default connect(mapStateToProps, { createPost, getUser, getPosts, deletePost })(Timeline);
