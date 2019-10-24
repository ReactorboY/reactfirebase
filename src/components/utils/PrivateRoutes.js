import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class PrivateRoutes extends Component {
    render() {
        const {component:Component,...props} = this.props
        return (
            <Route {...props} render={props => (
                this.props.isLoggedIn ? 
                <Component {...props} /> :
                <Redirect to="/login" />
            )}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoutes)