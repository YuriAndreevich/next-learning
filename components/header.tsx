import React from 'react'
import { Navigation } from './navigation'

function header() {

  const navItems  = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'blog', href: '/blog' },
  ]
  return (
      <header className='w-100 bg-[#000] text-white flex justify-center gap-[30px] p-4'>
      <Navigation navLinks={navItems } />
    </header>
  )
}

export default header