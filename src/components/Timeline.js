import React from 'react';
import PropTypes from 'prop-types';

const Timeline = props => (
  <div>
    <div className="TimelinePublish">
      <textarea rows={6} placeholder="¿Qué estas pensando hoy?" />
      <button className="TimelineButton">Publicar</button>
    </div>
    <div className="TimelinePost">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="TimelineDetails">
        <h4>Autor: Han Solo</h4>
        <div className="TimelineLikes">
          <img src="like-active.svg" className="TimelineIcon" alt="like" />
          <p>3</p>
        </div>
      </div>
    </div>
  </div>
);

Timeline.propTypes = {
  submitTimeline: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
};

export default Timeline;
