import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed w-full top-0 right-0 left-0 px-[1rem] py-[1rem] h-[4rem] z-[1000]'>
        <nav className='flex items-center justify-between'>
            <Link href={'/'} className='nav_logo text-[1.6rem] text-red-400 font-extrabold'>
                m🍿odie
            </Link>

            <Button type="button" className='text-white hover:!opacity-[.9] bg-red-400 text-[1rem]'>Contact us</Button>
        </nav>
    </header>
  )
}

export default Navbar
