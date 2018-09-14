import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div>
    <div className="TimelinePublish">
      <textarea rows={6} placeholder="¿Qué estas pensando hoy?" onChange={e => props.onChangeInput(e)} value={props.description} />
      <button className="TimelineButton" onClick={props.submitPost}>Publicar</button>
    </div>
    {props.posts.all_posts.map(post => (
      <div className="TimelinePost" key={post.id}>
        <p>{post.description}</p>
        <div className="TimelineDetails">
          <h4>{`Autor: ${props.users.find(user => user.id === post.user_id).name}`}</h4>
          {props.user.id === post.user_id &&
            <div>
              <button className="TimelineActions">Editar</button>
              <button className="TimelineActions">Eliminar</button>
            </div>
          }
          <div className="TimelineLikes">
            <img src="like-active.svg" className="TimelineIcon" alt="like" />
            <p>{post.likes}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

Post.propTypes = {
  submitPost: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  posts: PropTypes.shape({
    all_posts: PropTypes.array,
  }).isRequired,
  users: PropTypes.array.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default Post;
