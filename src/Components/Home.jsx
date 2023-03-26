import React, { useEffect, useState } from 'react'
import "../App.css";
import CoinList from './CoinList';


const Home = () => {

    

    const [coins, setCoins] = useState([]);
    const [market, setMarket] = useState([]);
    function Convert(x){
    
        if(typeof(x)==='string'){
            x=Number(x);
        }
        if(Number(x)>1000000000){
            return "$"+ Number(x/1000000000).toFixed(2) + "B";
        }
        if(Number(x)>1000000){
                return "$"+Number(x/1000000).toFixed(2) + "M";
            }  
            
            
        if(Number(x)>1000){
            return "$"+Number(x/1000).toFixed(2) + "K";
        }
        else{
            return "$"+Number(x).toFixed(2)
        }   
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bd58c350d0mshdaf85a086a7e738p1bd6bejsn153d5e666e70',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };

        fetch('https://coinranking1.p.rapidapi.com/stats?', options)
            .then(response => response.json())
            .then(response => { setMarket(response.data) })
            .catch(err => console.error(err));
    })

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bd58c350d0mshdaf85a086a7e738p1bd6bejsn153d5e666e70',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };

        fetch('https://coinranking1.p.rapidapi.com/coins?', options)
            .then(response => response.json())
            .then(response => { setCoins(response?.data.coins) })
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <div className='head-main'>
                <h1 >Global Stats</h1>
            </div>

            <div className='main2'>

                <div className='first'>
                    <div>
                        <h4>Active CryptoCurrencies</h4>
                        <p>{market?.totalCoins}</p>
                    </div>
                    <div>
                        <h4>Total Markets</h4>
                        <p>{market?.totalMarkets}</p>
                    </div>
                </div>

                <div className='second'>
                    <div>
                        <h4>Total MarketCap</h4>
                        <p>{Convert(market?.totalMarketCap)}</p>
                    </div>

                    <div>
                        <h4>Total 24hVolume</h4>
                        <p>{Convert(market?.total24hVolume)}</p>
                    </div>
                </div>
            </div>
            <div className='top5'>
                <h1>Top 5 CryptoCurrencies</h1>
            </div>
            <div className='cards'>
                {coins?.filter((item, id) => id <= 5).map(coin => {
                    return (
                        <CoinList market_cap_rank={coin.rank}
                            name={coin.name}
                            image={coin.iconUrl}
                            symbol={coin.symbol}
                            volume={coin.marketCap}
                            price={coin.price}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Home