import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// lets work with testing of fetch api with the aysnc method
let url = 'https://jsonplaceholder.typicode.com/users';
function getU () {
    fetch(url).then(rcv => rcv.json()).then(rcv => console.log(rcv, 'we done!'));
}
getU();

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