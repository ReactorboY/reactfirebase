import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getLogin} from '../../js/actions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('From Login form')
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.getLogin(newUser)
        this.setState({
            username:"",
            password:""
        })
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                        <div className="col s12 m12">
                            <h1><b>Login</b> Below</h1>
                            <div className="input-field col s10">
                                <input value={this.state.username} onChange={this.handleChange} id="username" type="text" />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="input-field col s10">
                                <input value={this.state.password} onChange={this.handleChange} id="password" type="text" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col s12">
                                <button className="btn waves-effect waves-light">Submit<i className="material-icons right">send</i></button>
                            </div>
                        </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLogin: data => dispatch(getLogin(data))
    }
}

export default connect(null, mapDispatchToProps)(Login)