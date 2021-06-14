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


ReactDOM.render(<Car />, document.getElementById('root'));