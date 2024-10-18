// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='text-black/80 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-around p-1'>
        <nav>
            <Link to="/" className='font-bold text-xl'>INTEC</Link>
        </nav>
        <ul className='flex gap-4 items-center font-semibold text-slate-100'>
            <Link to="/cart"><i className="fas fa-cart-shopping"></i> Cart</Link>
            <Link to="/login"><i className="fa-solid fa-user"></i> Sign in</Link>
        </ul>
    </div>
  )
}
