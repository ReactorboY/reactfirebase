import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from './components/auth/Login'
import PrivateRoutes from './components/utils/PrivateRoutes'
import Dashboard from './components/pages/Dashboard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
      return (
          <div className="container">
            <div className="row">
              {/* <h1>You Are {this.props.authorised}</h1> */}
              {/* <Form /> */}
              {/* <Post /> */}
            </div>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoutes path="/dashboard" component={Dashboard} />
          </Switch>
          </div>
      )
    }
}

export default App