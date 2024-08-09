import React from 'react';
import LoginForm from '../utils/components/LoginForm';

export default function Login() {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center bg-gray-200">
            <div className="flex flex-col md:w-96 md:h-4/6 w-56 h-96 py-8 bg-primary shadow-xl rounded-xl overflow-auto">
                <h1 className='text-fontPrimary font-black text-center text-2xl mb-6'>
                    Acesse sua conta...
                </h1>
                <LoginForm />
            </div>
        </div>
    );
};
