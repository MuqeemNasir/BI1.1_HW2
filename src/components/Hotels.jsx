import { useEffect, useState } from "react"
import useFetch from "../useFetch"
const BASE_URL = import.meta.env.VITE_API_URL;

const Hotel = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const {data, loading, error} = useFetch("/hotels")

    const [hotels, setHotels] = useState([])

    useEffect(() =>{
        if(data){
            setHotels(data)
        }
    }, [data])

    const handleDelete = async(hotelId) => {
        try{
            const response = await fetch(`${BASE_URL}/hotels/${hotelId}`, {
                method: "DELETE",
            })

            if(!response.ok){
                throw new Error("Failed to delete hotel.")
            }

            const deleted = await response.json()
            if(deleted){
                setSuccessMessage("Hotel Deleted Successfully.")
                setHotels((prev) => prev.filter(hotel => hotel._id !== hotelId))
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <h1>All Hotels</h1>
            <ul>{hotels?.map(hotel => (
                <li key={hotel._id}>{hotel.name} <button onClick={() => handleDelete(hotel._id)}>Delete</button></li>
            ))}</ul>
            <p>{successMessage}</p>
        </div>
    )
}

export default Hotel