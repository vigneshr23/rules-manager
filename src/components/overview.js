import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import RuleList from "./Rules/RuleList";
import AddRule from "./Rules/AddRule";
import EditRule from "./Rules/EditRule";

class Overview extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rules">View Rules</Link>
            </li>
            <li>
              <Link to="/rules/add">Add</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {/* <Route
            path="/"
            exact
            render={(props) => <RuleList {...props} />}
          /> */}
          <Route
            path="/rules"
            exact
            render={(props) => <RuleList {...props} />}
          />
          <Route
            path="/rules/add"
            exact
            render={(props) => <AddRule {...props} />}
          />
          <Route path="/rules/edit/:id" component={EditRule} />

          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Overview;
