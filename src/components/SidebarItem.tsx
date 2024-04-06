'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {  CiBookmarkCheck } from 'react-icons/ci';

interface Props {
    icon:  React.ReactNode
    title: string
    path:  string
}

export const SidebarItem = ({icon, path, title}: Props) => {

    const pathName = usePathname();

  return (
    <>
 
        <li>
              <Link href={path} className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
               hover:bg-gradient-to-r hover:bg-sky-600  hover:text-white
              ${pathName === path ? 'bg-gradient-to-r from-sky-600 to-cyan-400 text-white' : ''}`}>
                
                {icon}
                <span className="-mr-1 font-medium">{title}</span>
              </Link>
            </li>
           
    </>
  )
}
