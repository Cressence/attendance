import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './pages/login/login';
import Layout from './pages/layout/layout';

function App() {
  return (
    <Router>
      {/* <Route exact path="/" component={Login} /> */}
      <Route exact path="/" component={Layout} />
    </Router>
  );
}

export default App;
