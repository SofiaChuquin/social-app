import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div style={{ width: '100%' }}>
    <div className="TimelinePublish">
      <textarea rows={6} placeholder="¿Qué estas pensando hoy?" onChange={e => props.onChangeInput(e)} value={props.description} />
      <button className={props.description.length > 0 ? "TimelineButton" : "TimelineDisabled"} onClick={props.submitPost} disabled={props.description.length > 0 ? false : true}>Publicar</button>
    </div>
    {props.posts.all_posts.map(post => (
      <div className="TimelinePost" key={post.id}>
        {props.postNumber === post.id ?
          <textarea rows={6} onChange={e => props.onEdit(e)} defaultValue={post.description} className="TimelineEdit" /> :
          <p>{post.description}</p>
        }
        <div className="TimelineDetails">
          <h4>{`Autor: ${props.users.find(user => user.id === post.user_id).name}`}</h4>
          {props.user.id === post.user_id &&
            (props.postNumber === post.id ?
              <button className="TimelineActions" onClick={() => props.saveChange(post.id)}>Guardar</button> :
              <div>
                <button className="TimelineActions" onClick={() => props.changeDescription(post.id, post.description)}>Editar</button>
                <button className="TimelineActions" onClick={() => props.removePost(post.id)}>Eliminar</button>
              </div>
            )
          }
          <div className="TimelineLikes">
            {props.postLiked.includes(post.id) ?
              <Fragment><img src="like-active.svg" className="TimelineIconActive" alt="liked" /><p>{post.likes}</p></Fragment> :
              <Fragment><a onClick={() => props.addLike(post.id, post.likes)}><img src="like.svg" className="TimelineIcon" alt="like" /></a><p>{post.likes}</p></Fragment>
            }
          </div>
        </div>
      </div>
    ))}
  </div>
);

Post.propTypes = {
  submitPost: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  changeDescription: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  saveChange: PropTypes.func.isRequired,
  postLiked: PropTypes.array.isRequired,
  postNumber: PropTypes.number.isRequired,
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
