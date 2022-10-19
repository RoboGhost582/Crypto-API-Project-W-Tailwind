import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function Card() {
    const [state, setState] = useState([])

    React.useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`).then((response) => {
            setState(response.data)
            console.log(response.data);
        });
    }, []);

    var items = state.slice(0, 6).map((item) => {
        let profit = item.price_change_percentage_24h >= 0;
        const addCommans = item.current_price > 1000
        return (
            <div class="flex flex-col items-center text-center justify-center w-44 h-44 bg-white rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-4 mr-6 " >
                <a href='/home'>
                    <img class="rounded-t-lg mt-4 " src={item.image} alt={item.id} height='50' width='50' />
                </a>
                <div class="p-5">
                    <a href="/home">
                        <h5 class="font-bold tracking-tight text-gray-900 dark:text-white" style={{ textTransform: 'capitalize' }}>{item.id}</h5>
                    </a>
                    <p class="font-normal text-gray-700 dark:text-gray-400">${addCommans ? item.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : item.current_price.toFixed(2)}</p>
                    <p class="font-normal text-gray-700 dark:text-gray-400" style={{color: profit > 0 ? "rgb(14, 203, 129)" : "red",fontWeight: 500}}>
                    {profit && "+"}
                    {item.price_change_percentage_24h.toFixed(2)}%
                    </p>

                </div>
            </div>
        )
    })
    return (
        <div className='container flex sm: flex-col md:flex-row justify-center items-center mt-32 ml-32'>
            <div className='flex flex-col px-48'>
                <h2 className='font-bold text-4xl mb-8'>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                <p className='mb-8'>See all available assets: Cryptocurrencies and NFT's</p>
                <button className="rrounded-tl-lg rounded-br-lg p-2 bg-green-700 text-white">See More Coin</button>
            </div>
            <div className='mt-10 flex flex-wrap sm:justify-center'>
                {items}
            </div>

        </div>



    )
}

export default Card