import React, {Component} from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import HashRouter from 'react-router-dom/HashRouter';
import routes from './routes';

const Router = history.pushState ? BrowserRouter : HashRouter;

class App extends Component {
  render() {
    return (
      <Router>{routes}</Router>
    );
  }
}

export default App;
