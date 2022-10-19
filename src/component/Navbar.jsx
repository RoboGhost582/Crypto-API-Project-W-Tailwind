import React from 'react'

function Navbar() {
  return (
    <nav>
    <div className="flex justify-evenly items-center mb-20 border-b-2">
      <div className='sm:justify-center md:"'>
        <span className="text-black font-bold text-2xl ">De</span><span className="text-green-700 font-bold text-2xl">Fi</span>
      </div>
      <div className="hidden md:flex">
        <h1>
          <a className="mr-10">Home</a>
        </h1>
        <h1>
          <a className="mr-10">Featured</a>
        </h1>
        <h1>
          <a className="mr-10">Earn</a>
        </h1>
        <h1>
          <a>Contact</a>
        </h1>
      </div>
      <div>
        <button className="md:rrounded-tl-lg rounded-br-lg p-2 bg-green-700 text-white">Save Changes</button>
      </div>
    </div>
  </nav>

  )
}

export default Navbar