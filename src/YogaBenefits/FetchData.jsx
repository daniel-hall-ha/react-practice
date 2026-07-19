import { useEffect } from "react";
import { useState } from "react"

function FetchData(url) {
    console.log('Use Effect Running')
    const [dataFetched, setDataFetched] = useState(null);
    useEffect(() => {    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setDataFetched(data)
            })
            .catch(error => {
                console.log(error)
            })
    },[url])
    return dataFetched
}

export default FetchData