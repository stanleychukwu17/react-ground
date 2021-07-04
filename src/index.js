import React, {useState, useMemo} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {useFetch} from './useFetch';


function Car (props) {
    let [color, setColor] = useState('blue');

    let changeColor = (wch) => setColor(wch);

    return (
        <div>
            <div>This is my car {color}</div>
            <div><button onClick={changeColor.bind(this, (color === 'yellow') ? 'blue' : 'yellow')}>change color</button></div>
        </div>
    );
}


ReactDOM.render(<Car color="orange" />, document.getElementById('root'));