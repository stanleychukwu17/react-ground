import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);

    console.log('this guy has been rendered');
}