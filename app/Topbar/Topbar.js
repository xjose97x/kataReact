import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {test: 'Hola mundo'};
  }
  
  render() {
    return (
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/alphabet">Alphabet</Link></li>
        <li><Link to="/encryption">Encryption</Link></li>
      </ul>
    );
  }
}

export default Topbar;
