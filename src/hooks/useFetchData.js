import { useState, useEffect } from "react"
import axios from "axios"

const API_KEY = "H9HTD1I_fCBhHYUoIVzWaZ28yMBrPPFOfBkgUz31pj0" // TODO: Turn this into env variable

export default function useFetch(query = "", page = 1) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setData([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        console.log("API call")
        let url
        if (query === "") url = "https://api.unsplash.com/photos/random/?count=30"
        else url = `https://api.unsplash.com/search/photos/?query=${query}&page=${page}&per_page=30`

        axios.get(url, {
            headers: { 'Authorization': `Client-ID ${API_KEY}` }
        })
            .then(response => {
                setData(prevData => query === "" ? response.data : [...prevData, ...response.data.results])
                setError(null)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [query, page])

    return [data, loading, error]
}
