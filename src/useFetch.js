import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) => {
    let [data, setData] = useState(null);
    let reCount = useRef(0);
    reCount.current++;
    console.log('we rendered')

    useEffect(() => {
        fetch(url).then(x =>x.json().then(x => { setData(x); }));
    }, [url])

    return {data}
}