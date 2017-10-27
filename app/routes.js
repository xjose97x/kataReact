import React from 'react';
import Route from 'react-router-dom/Route';

import Topbar from './Topbar/Topbar';
import Main from './Main/Main';
import Alphabet from './Alphabet/Alphabet';
import Encryption from './Encryption/Encryption';

export default <div>
  <Topbar/>

  <Route exact path="/" component={Main}/>
  <Route path="/alphabet" component={Alphabet}/>
  <Route path="/encryption" component={Encryption}/>
</div>;
