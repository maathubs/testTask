import React, { Component } from 'react';
import Layout from './Layout';
import Signup from './Signup'
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Redirect from="/" exact to="/Login" />
          </Switch>   
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
