import React, {useState, useMemo} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {useFetch} from './useFetch';


function Car (props) {
    let [color, setColor] = useState('blue');

    let {data} = useFetch('https://api.kanye.rest/');

    let changeColor = (wch) => setColor(wch);

    let myG = useMemo(()=>longestWord(data), [data, longestWord])

    return (
        <div>
            <div>This is my car {color}</div>
            <div><button onClick={changeColor.bind(this, (color === 'yellow') ? 'blue' : 'yellow')}>change color</button></div>
            <div className="">{myG}</div>
        </div>
    );
}


ReactDOM.render(<Car color="orange" />, document.getElementById('root'));