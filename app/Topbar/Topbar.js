import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {title: 'Corregir'};
  }
  
  render() {
    return (
      <ul>
        <li><Link to="/">{this.state.title}</Link></li>
        <li><Link to="/">Exercise1</Link></li>
        <li><Link to="/">Exercise2</Link></li>
      </ul>
    );
  }
}

export default Topbar;
