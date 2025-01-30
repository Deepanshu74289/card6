import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className=' flex bg-black justify-between py-5  text-white items-center' >
            <div><img className='h-[70px] w-[70px] rounded-full border-green-400 border-2 ' src="https://tse3.mm.bing.net/th?id=OIP.y1l9vc1r9VreleEEUursrAHaHa&pid=Api&P=0&h=180" alt="" /></div>
            <ul className='flex justify-between gap-10 border-double font-extrabold '>
          <li className='hover:text-blue-500'> <Link to="Home">Home</Link></li>
          <li className='hover:text-blue-500'> <Link to="form">form</Link></li>
          <li className='hover:text-blue-500'> <Link to="Home">Services</Link></li>
          <li className='hover:text-blue-500'> Policy</li>
          <li className='hover:text-blue-500'>Setting</li>
          <li className='hover:text-blue-500'>About</li>
          <li className='hover:text-blue-500'>Agreements</li>
        </ul>
            <div>
                <input className='text-black font-semibold' type="text" name="" id="" />
                <button className='hover:text-blue-500'>submit</button>

            </div>

                

        </nav>
    )
}
