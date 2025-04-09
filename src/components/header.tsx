'use client'

import Image from "next/image";
import Link from 'next/link';


export default function Header() {


    return (
        <div className="bg-white z-2">
            <header className="">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Interncify</span>
               <Image
                         src="/trixtern_full.png"
                         alt="Trixtern Technologies"
                         width={160}
                         height={35}
                         priority
                       />
      </Link>
    </div>
    <div className="flex lg:hidden">
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
    <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>

      {/* <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
      <Link href="/users" className="text-sm font-semibold leading-6 text-gray-900" onClick={navigatetoUsers} >Users</Link> */}
      <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">Services</Link>
      <Link href="/blogs" className="text-sm font-semibold leading-6 text-gray-900">Blogs & Insights</Link>
      <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">About</Link>
      <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Careers</Link>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact Us <span aria-hidden="true">&rarr;</span></Link>
    </div>
  </nav>

 
            </header>

        </div>
    )
}

//export default Header();