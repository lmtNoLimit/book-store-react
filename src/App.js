import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "components/ProtectedRoute";
import Login from "pages/Login";
import Register from "pages/Register";
import Home from "pages/Home";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <ProtectedRoute exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
