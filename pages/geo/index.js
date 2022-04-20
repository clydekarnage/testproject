
import GeoSearch from "../../components/CoinsSearch";

import GeoList from "../../components/GeoList";


function Geo({ geoData }) {
    console.log(geoData)
 
    return(
        <div className="coin_app">
            <GeoSearch type='text' placeholder='Search IP' />
            <GeoList coinsData={geoData} />
        </div>
    )
}



export default Geo;

export const getServerSideProps = async() => {
    const res = await fetch(`http://ip-api.com/json/24.48.0.1`)

    const geoData = await res.json();

    return {
        props: {
            geoData
        }
    }
}