import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Car extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>This is my car</div>
        );
    }
}

function Jones (props) {
    return (
        <div>my name is jones</div>
    );
}


ReactDOM.render(<Car  />, document.getElementById('root'));
ReactDOM.render(<Jones  />, document.getElementById('boot'));