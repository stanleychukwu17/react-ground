import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//now we test immutability for arrays - method 3
let kal = [1,2,3], jon = [];
let ind = kal.indexOf(2);
let c1 = kal.splice(0, ind);
let c3 = kal.splice(ind - 1);
let fin = [...c1, 4, ...c3];
console.log(ind, c1, c3, fin);

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