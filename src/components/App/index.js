import React, { Component } from 'react'
import Firebase from '../Firebase'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes:[]
        }
    }

    componentDidMount() {
        const fire = new Firebase()
        fire.notes().get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data())
            console.log(data)
            this.setState({notes:data})
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default App