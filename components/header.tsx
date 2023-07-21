import Link from 'next/link'
import React from 'react'

function header() {
  return (
      <header className='w-100 bg-[#000] text-white flex justify-center gap-[30px] p-4'>
          <Link href='/'>Home</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/about'>About</Link>

    </header>
  )
}

export default header