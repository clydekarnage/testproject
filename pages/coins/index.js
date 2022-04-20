function Coins({ coinsData }) {

    console.log(coinsData)

    return(
        <div>
            Hello World
        </div>
    )
}



export default Coins;

export const getServerSideProps = async() => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
    `)

    const coinsData = await res.json();

    return {
        props: {
            coinsData
        }
    }
}