'use client'

import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";


const LoginForm = () => {
    const [viewPass, setViewPass] = useState<boolean>(false);
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleViewPass() {
        setViewPass(prev => !prev);
    }

    function handleSetUser(e: React.ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value);
    }

    function handleSetPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(user, password)
    }
    
    return (
        <form onSubmit={(e) => handleLogin(e)} className='flex flex-col w-full h-full px-4 space-y-4 justify-center'>
        <div className='flex flex-col space-y-1 px-4'>
            <label className='text-fontColor font-bold text-lg'>Usuário</label>
            <input 
                type="text" 
                className='md:h-10 h-8 px-2 md:text-lg text-sm text-primary rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary' 
                placeholder="Digite seu usuário" 
                value={user}
                onChange={(e) => handleSetUser(e)}
            />
        </div>
        <div className='relative flex flex-col space-y-1 px-4'>
            <label className='flex flex-row items-center text-fontColor font-bold text-lg'>Senha</label>
            <input 
                id="password"
                type={viewPass ? 'text' : 'password'} 
                className='md:h-10 h-8 px-2 md:text-lg text-sm text-primary rounded-md border border-gray-300 pr-12 focus:outline-none focus:ring-2 focus:ring-primary' 
                placeholder="Digite sua senha" 
                value={password}
                onChange={(e) => handleSetPassword(e)}
            />
            <div onClick={handleViewPass} className='absolute inset-y-0 right-0 pr-8 pt-8 flex cursor-pointer items-center'>
                {viewPass ? 
                    <GrFormView size={24} className="text-secondary"/> : 
                    <GrFormViewHide size={24} className="text-secondary"/>
                }
            </div>
        </div>
        <div className='flex flex-col space-y-1 px-4 items-end'>
            <button type="submit" className='md:w-24 w-16 md:h-12 h-8 md:text-lg text-sm bg-secondary hover:bg-accent rounded-md'>acessar</button>
        </div>
        </form>
    );
};

export default LoginForm;