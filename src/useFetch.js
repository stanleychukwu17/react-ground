import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let reCount = useRef(0);
    reCount.current++;

    useEffect(() => {
        fetch(url).then(x =>x.json().then(x => {
            setData(x); setLoading(false);
        }));
    }, [url])

    console.log('re-rendered', data, loading, reCount)
    return {data, loading}
}