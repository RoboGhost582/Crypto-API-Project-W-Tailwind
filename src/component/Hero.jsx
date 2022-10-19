import React from 'react'

function Hero() {
    return (
        <div className="container-xl flex flex-wrap  justify-center">
            <div className="flex-col">
                <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                <h1 className="my-4 font-bold text-4xl">Invest in Cryptocurreny with Your IRA</h1>
                <p className="mb-3">Buy, Sell, and store hundreds of cryptocurrencies</p>
                <div className="flex">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Email Address..." type="text" name="search" />
                    <button className="rounded-lg bg-green-700 text-white ml-2">Learn More</button>
                </div>
            </div>
            <div className="flex ml-40 mr-12">
                <img src='https://github.com/fireclint/defi-react-api/blob/main/src/assets/hero-img.png?raw=true' alt='Hero' width="300" height="100%" />
            </div>
        </div >
    )
}

export default Hero