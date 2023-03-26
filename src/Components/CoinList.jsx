import React from 'react'

const CoinList = ({ name, image, symbol, price, volume }) => {
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
     
        return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <div className='imgname'>
                    <img className=" images" src={image} alt="" />
                    <h5 className="card-title coinname">{name}</h5>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted coinsymb">Symbol : {symbol}</h6>
                    <p className="card-text"></p>
                    <p className="card-link">Price : {Convert(price)}</p>
                    <p className="card-link mcap">Market Cap : {Convert(volume)}</p>
                </div>
            </div>
        </>
    )
}
export default CoinList
