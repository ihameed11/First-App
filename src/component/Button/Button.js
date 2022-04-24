import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} id={this.props.id} style={this.props.style}>
                {this.props.text}
                
            </button>
        );
    }
}

export default Button;
