import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let sam = {'color': 'blue', 'background': 'red'}
for (const ky in sam) {
    console.log(sam)
    if (Object.hasOwnProperty.call(sam, ky)) {
        const element = sam[ky];
    }
}

class Car extends React.Component {
    constructor (props) {
        super(props);
        this.state = {'color':'blue'};
    }

    changeColor (color) {
        let nxt = (this.state.color === 'blue') ? 'red' : 'blue';
        this.setState({color: nxt});
    }

    render () {
        return (
            <div>
                <div>This is my car {this.state.color}</div>
                <div><button onClick={this.changeColor.bind(this, 'yellow')}>change color</button></div>
            </div>
        );
    }
}

function Jones (props) {
    return (
        <div>my name is jones</div>
    );
}


ReactDOM.render(<Car color="orange" />, document.getElementById('root'));
ReactDOM.render(<Jones  />, document.getElementById('boot'));