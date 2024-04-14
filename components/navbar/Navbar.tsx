import Link from 'next/link'
import React from 'react'
import { HomeIcon } from '@primer/octicons-react'
import { text } from 'stream/consumers'

const navItems = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Pricing'},
  { path: '/contact', text: 'Contact'}
]

const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      
        <Link href={"/"} className='flex items-center'>
          <HomeIcon className='mr-2'/>
        <span>Home</span>
        </Link>

        <div className='flex flex-1'></div>

        {navItems.map(navItem => (
          <Link key={navItem.path} href={navItem.path} className='mr-2'>{navItem.text}</Link>
        ))}
    </nav>
  )
}

export default Navbar
