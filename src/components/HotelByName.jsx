import useFetch from "../useFetch"
const BASE_URL = import.meta.env.VITE_API_URL;

const HotelByName = ({name}) => {
    const {data, loading, error} = useFetch(`/hotels/${name}`)
    console.log(data)

    return(
        data ? <div>
            <h2>{data.name}</h2>
            <p><strong>Location: </strong>{data.location}</p>
            <p><strong>Rating: </strong>{data.rating}</p>
            <p><strong>Price Range: </strong>{data.priceRange}</p>
        </div> : loading && <p>Loading...</p>
    )
}

export default HotelByName