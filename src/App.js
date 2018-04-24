import React, { Component } from 'react';
import {
  Route,   //一条路由
  BrowserRouter as Router, //容器,
  Link,
} from 'react-router-dom';
import Home from './components/home';
import User from './components/user';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      // 
      <Router>
        <div>
          <nav className="con">
            <div className="container">
              <ul className="nav nav-pills">
                <li role="presentation" className="active"><Link to="/home">Home</Link></li>
                <li role="presentation"><Link to="/user">user</Link></li>
                
              </ul>
            </div>
          </nav>
          <div>
            <Route path="/home" component={Home}/>
            <Route path="/user" component={User}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
