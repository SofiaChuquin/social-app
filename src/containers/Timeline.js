import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Timeline extends Component {
  render() {
    return (
      <div>
        Este es el timeline
        <Link to="/log_in">
          <button>Cerrar sesión</button>
        </Link>
      </div>
    );
  }
}

export default Timeline;
