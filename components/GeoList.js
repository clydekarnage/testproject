import Geo from "./Geo";

const GeoList = ({ geoData }) => {
    return(
        <>
            {geoData && geoData.map(geo => {
                return (
                    <Geo  
                        key={geo.countrycode}
                        country={geo.country}
                    />
                )
            })}
        </>
    )
}

export default GeoList;