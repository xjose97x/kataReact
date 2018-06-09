import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {title: 'Main'};
  }
  
  render() {
    return (
      <div className="topBar">
        <ul>
          <li><Link to="/">{this.state.title}</Link></li>
          <li><Link to="/exercise1">Exercise1</Link></li>
          <li><Link to="/exercise2">Exercise2</Link></li>
        </ul>
      </div>
    );
  }
}

export default Topbar;
