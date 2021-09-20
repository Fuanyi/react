import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(count){
        this.setState({
            count : count + 1
        });
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
