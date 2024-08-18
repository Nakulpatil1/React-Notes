import {useEffect, useState} from 'react'

//Note 1 :- The Fetch API provides an interface for fetching resources (including across the network). It uses request and response objects.
//Note 2 :- A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
//Note 3 :- .then : when a promise is successful, you can then use the resolved data.
//Note 4 :- .catch : when a promise fails, you catch the error, and do something with the error information.

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;