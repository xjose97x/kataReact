import React from 'react';
import Route from 'react-router-dom/Route';

import Topbar from './Topbar/Topbar';
import Main from './Main/Main';
import Exercise1 from './Exercise1/Exercise1';
import Exercise2 from './Exercise2/Exercise2';

export default <div>
  <Topbar/>

  <Route exact path="/" component={Main}/>
  <Route path="/exercise1" component={Exercise1}/>
  <Route path="/exercise2" component={Exercise2}/>
</div>;
