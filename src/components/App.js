import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Form from "./Form";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/logout" component={Logout}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
