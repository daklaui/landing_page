import React from 'react'
import NavBarProps from './interface/navbar.props'
import './navbar.style.css'
import { useUser } from '@auth0/nextjs-auth0/client';
export const NavBar = ({ }: NavBarProps) => {
    const { user, error, isLoading } = useUser();
 
    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-center items-center">
                <p className='headerTitle '>
                    AI Ignition
                </p>
                <div>

                </div>
                <a className={`${!user ? 'bg-blue-500 hover:bg-blue-700' : 'bg-red-500 hover:bg-red-700'}  text-white font-bold py-2 px-4 rounded `} href={!user ? '/api/auth/login' : '/api/auth/logout'}>
                    {!user ? 'Login' : 'Logout'}
                </a>
            </div>
        </nav>
    )
}

