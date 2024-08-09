'use client'

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/app/contexts/AuthContext';
import Navbar from '../components/Navbar';

const PrivateRoutes = ({ children }) => {
    const { isAuthenticate, checkAuth } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                await checkAuth();
                setIsLoading(false);
            } catch (error) {
                console.error('Error verifying authentication:', error);
                router.push('/login'); 
            }
        };

        if (isLoading) {
            verifyAuth();
        }
    }, [isLoading, checkAuth, router]);

    if (isLoading) {
        return (
            <div className="relative w-screen h-screen">
                <Navbar />
                <div className="fixed top-0 left-0 w-screen h-screen bg-white opacity-50 z-50 flex items-center justify-center">
                    <p className="text-accent text-2xl">Carregando...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticate) {
        router.push('/login');
        return null;
    }

    return <div className='md:flex'><Navbar />{children}</div>;
};

export default PrivateRoutes;
