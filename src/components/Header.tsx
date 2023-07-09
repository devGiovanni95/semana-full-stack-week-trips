"use client";

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { BiMenu } from 'react-icons/bi'

const Header = () => {
    const { status, data } = useSession();
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    console.log("🚀 ~ file: Header.tsx:10 ~ Header ~ status:", status);

    const handleLoginClick = () => signIn();
    const handleLogoutClick = () =>{
        setMenuIsOpen(false);
        signOut();
    };
    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);




    return (
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">

            <div className="relative h-[32px].w-[182px]">
                <Image width={183} height={32} src="/logo.png" alt="Full Stack Week" />
            </div>

            {status === 'unauthenticated' && (
                <button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>
                    Login
                </button>
            )}

            {status === 'authenticated' && data.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid p-3 rounded-full relative">
                    <BiMenu size={24} onClick={() => handleMenuClick()} className='cursor-pointer'/>
                    <Image height={24} width={24} src={data.user.image!} alt={data.user.name!} className='rounded-full shadow-2xl ' />
                    
                    {menuIsOpen && (
                        <div className="z-50 absolute top-14 left-0  w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            <button className='text-primary text-sm font-semibold' onClick={() => handleLogoutClick()}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>

            )}

            
        </div>
    )
}

export default Header;
