import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) => {
    let [data, setData] = useState(null);
    let reCount = useRef(0);
    reCount.current++;

    useEffect(() => {
        fetch(url).then(x =>x.json().then(x => { setData(x); }));
    }, [url])

    console.log('re-rendered', data, reCount)
    return {data}
}