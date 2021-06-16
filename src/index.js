import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//now we test immutability for arrays - method 3
let kal = [1,2,3];
let ind = kal.indexOf(2);
let fin = [...kal.slice(0, ind), 4, ...kal.slice(ind)];
console.log(ind, fin);

class Car extends React.Component {
    constructor (props) {
        super(props);
        this.state = {'color':'blue'};
    }

    changeColor (color) {
        let nxt = (this.state.color === 'blue') ? 'red' : 'blue';
        this.setState({color: nxt});
        console.log(nxt, color);
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