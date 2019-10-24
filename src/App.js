import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <h1>You Are {this.props.authorised}</h1>
            <Form />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    authorised: state.authorised
  }
}

export default connect(mapStateToProps)(App)