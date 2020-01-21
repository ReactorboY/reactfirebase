import React, { Component } from 'react'
import {withFirebase} from '../Firebase'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes:{}
        }
    }

    componentDidMount() {
        this.props.firebase.db()
    }
    render() {
        return (
            <div>
                Hi
            </div>
        )
    }
}

export default withFirebase(App)