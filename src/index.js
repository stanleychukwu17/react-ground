import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Car (props) {
    this.state = {'color':'blue'};

    changeColor (color) {
        let nxt = (this.state.color === 'blue') ? 'red' : 'blue';
        this.setState({color: nxt});
    }

    return (
        <div>
            <div>This is my car {this.state.color}</div>
            <div><button onClick={this.changeColor.bind(this, 'yellow')}>change color</button></div>
        </div>
    );
}



ReactDOM.render(<Car color="orange" />, document.getElementById('root'));