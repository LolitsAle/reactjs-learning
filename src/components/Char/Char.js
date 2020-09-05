import React, { Component } from 'react'

class Char extends Component {
    render() {
        const charStyle = {
            display: "inline-block", 
            padding: "16px", 
            textalign: "center", 
            margin: "16px", 
            border: "1px solid black"
        }
        return (
            <div style={charStyle} onClick={this.props.click}>
                <p>{this.props.char}</p>
            </div>
        );
    }
}

export default Char