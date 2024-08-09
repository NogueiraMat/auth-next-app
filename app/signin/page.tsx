import React from 'react';
import SigninForm from '../utils/components/SigninForm';

export default function Login() {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center bg-gray-200">
            <div className="flex flex-col md:w-96 md:h-5/6 w-56 h-3/5 py-8 bg-primary shadow-xl rounded-xl overflow-auto">
                <h1 className='text-fontPrimary font-black text-center text-2xl mb-6 px-2'>
                    Crie seu usuário...
                </h1>
                <SigninForm />
            </div>
        </div>
    );
};
