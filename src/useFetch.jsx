import { useState, useEffect, } from "react"
const BASE_URL = import.meta.env.VITE_API_URL;

const useFetch = (endpoint, initialData) => {
    const [data, setData] = useState(initialData)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        fetch(`${BASE_URL}${endpoint}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))
    }, [endpoint])
    return {data, loading, error, setData}
}

export default useFetch