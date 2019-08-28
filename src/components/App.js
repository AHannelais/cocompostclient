import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import "./App.css";
import HomePage from "./Pages/client/HomePage";
import AdminPage from "./Pages/admin/AdminPage";
import CreateArticle from "./Pages/admin/CreateArticle";
import EditArticle from "./Pages/admin/EditArticle";

import ClientPage from "./Pages/client/ClientPages";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={HomePage} />

              <Route path="/admin" exact component={AdminPage} />
              <Route path="/:page" exact component={ClientPage} />
              <Route
                path="/admin/new_article"
                exact
                component={CreateArticle}
              />
              <Route
                path="/admin/edit_article/:id"
                exact
                component={EditArticle}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
