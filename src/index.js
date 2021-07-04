import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {useFetch} from './useFetch';

function Car (props) {
    let [color, setColor] = useState('blue');
    let [man, setMan] = useState('john');

    let {data} = useFetch('https://api.kanye.rest/');
    console.log(data);

    let changeColor = (wch) => setColor(wch);

    return (
        <div>
            <div>This is my car {color}</div>
            <div>This is my name {man}</div>
            <div><button onClick={changeColor.bind(this, (color === 'yellow') ? 'blue' : 'yellow')}>change color</button></div>
            <div><button onClick={()=>setMan(cur => {
                return 'vanguard'
            })}>Test state</button></div>
        </div>
    );
}


ReactDOM.render(<Car color="orange" />, document.getElementById('root'));