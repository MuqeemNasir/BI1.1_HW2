import useFetch from "../useFetch"

const Hotel = () => {
    const {data, loading, error} = useFetch("/hotels")

    return(
        <div>
            <h1>All Hotels</h1>
            <ul>{data?.map(hotel => (
                <li>{hotel.name}</li>
            ))}</ul>
        </div>
    )
}

export default Hotel