import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "pages/Login";
import Register from "pages/Register";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
