import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import './App.css'
import HomePage from './Pages/client/HomePage'
import AdminPage from './Pages/admin/AdminPage'
import CreateArticle from './Pages/admin/CreateArticle'
import EditArticle from './Pages/admin/EditArticle'
import ClientPage from './Pages/client/ClientPages'
import ShowArticle from './Pages/client/ShowArticle'
import Cookies from './Pages/Cookies'
class App extends React.Component {
  state = { cookies: true }
  renderCookies = () => {
    if (this.state.cookies) {
      return (
        <Cookies
          callback={() => {
            this.setState({ cookies: false })
          }}
        />
      )
    }
  }
  render () {
    return (
      <div>
        {this.renderCookies()}
        <Router history={history}>
          <div>
            <Switch>
              <Route path='/' exact component={HomePage} />

              <Route path='/admin' exact component={AdminPage} />
              <Route path='/:page' exact component={ClientPage} />
              <Route
                path='/admin/new_article'
                exact
                component={CreateArticle}
              />
              <Route
                path='/admin/edit_article/:_id'
                exact
                component={EditArticle}
              />
              <Route path='/articles/:_id' exact component={ShowArticle} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
