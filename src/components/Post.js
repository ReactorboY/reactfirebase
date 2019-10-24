import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getData} from '../js/actions'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        this.props.getData()
    }
    render() {
        return (
            <div>
                <h1>Articles</h1>
                <ul>
                    {this.props.articles.map(el => (
                        <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        articles: state.remoteArticles.slice(0,10)
    }
}

export default connect(mapStateToProps,{getData})(Post)