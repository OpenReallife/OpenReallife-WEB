import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

import OpenReallifeLogo from '../public/assets/OpenReallifeLogoForDev.png'


export default function Header() {


  return (
    <nav className='flex items-center justify-between flex-wrap bg-black h-20 text-white pl-52 pr-52'>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        <a href='#'>
            <Image src={OpenReallifeLogo} alt="OpenReallife Logo" />
        </a>
        <div className='lg:items-center lg:w-auto space-x-14'>
          <a href='#' className='text-white hover:text-or-green hover:underline font-bold'>Home</a>
          <a href='#' className='text-white hover:text-or-green hover:underline font-bold'>Contribute</a>
          <a href='#' className='bg-or-green hover:bg-or-lightgreen text-black font-sans font-bold p-2 px-4 rounded-md'>Anmelden</a>
        </div>
    </nav>
  )
}