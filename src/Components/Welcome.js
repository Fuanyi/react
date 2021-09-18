import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <span>Welcome {this.props.name} a.k.a {this.props.HeroName}</span>
            </div>
        )
    }
}

export default Welcome
