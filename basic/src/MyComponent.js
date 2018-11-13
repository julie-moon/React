import React, { Component } from 'react';

class MyComponent extends Component{
    /*
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    */

    state = {
        number: 0
    }
    render() {
        return(
            <div>
                <p>숫자:{this.state.number}</p>
                <button onClick={ () => {
                    this.setState({
                        number:this.state.number + 1
                    })
                    }
                }>더하기</button>
            </div>
        );
    }
}

export default MyComponent;