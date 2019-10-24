import React, { Component } from 'react'
import {connect} from 'react-redux'
import {auth} from '../js/actions'

function mapDispathToProps(dispatch) {
    return {
        auth: data => dispatch(auth(data)) 
    }
}

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorised: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('From Login')
        const {authorised} = this.state
        this.props.auth({isLoggedIn: true, authorised})
        this.setState({
            authorised:""
        })
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s6">
                        <input id="authorised" type="text" value={this.state.authorised} onChange={this.handleChange} />
                        <label htmlFor="authorised">Authorised</label>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect(null,mapDispathToProps)(Form)