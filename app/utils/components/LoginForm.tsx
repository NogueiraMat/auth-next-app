'use client'

import { useContext, useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BiSolidErrorAlt } from "react-icons/bi";
import { AuthContext } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [viewPass, setViewPass] = useState<boolean>(false);
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    
    const { login } = useContext(AuthContext);
    const router = useRouter();
    
    function handleViewPass() {
        setViewPass(prev => !prev);
    }

    function handleSetUser(e: React.ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value);
    }

    function handleSetPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        setError(null); 
    
        try {
            const res = await login(user, password);
            if (!res.ok) {
                const data = await res.json()
                setError(data['detail']);
                return null;
            }  else {
                router.push('/');
            }    
        } catch (error) {
            console.error('Login error:', error);
        }
    }
    
    return (
        <form onSubmit={(e) => handleLogin(e)} className='flex flex-col w-full h-full md:px-4 space-y-4 justify-center'>
            <div className='flex flex-col space-y-1 px-4'>
                <label className='text-fontPrimary font-bold text-lg'>Usuário</label>
                <input 
                    type="text" 
                    className='md:h-10 h-8 px-2 md:text-lg text-sm text-primary rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary' 
                    placeholder="Digite seu usuário" 
                    value={user}
                    onChange={(e) => handleSetUser(e)}
                />
            </div>
            <div className='relative flex flex-col space-y-1 px-4'>
                <label className='flex flex-row items-center text-fontPrimary font-bold text-lg'>Senha</label>
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
            <div className='flex flex-row space-y-1 px-4 items-end justify-end space-x-4'>
                
                {error && (
                    <div className='flex flex-row w-full justify-end items-center space-x-4 text-red-500 md:text-sm text-xs font-bold'>
                        <BiSolidErrorAlt size={15}/>{error}
                    </div>
                )}
                <button type="submit" className='flex md:w-24 w-16 md:h-12 h-8 md:text-lg text-sm text-fontPrimary bg-secondary hover:bg-accent items-center p-1 space-x-1 rounded-md'>
                    <BsBoxArrowInRight size={25}/><h1 className="md:text-sm text-xs">acessar</h1>
                </button>
            </div>
            <div onClick={() => router.push("/signin")} className="flex flex-col px-4 items-end cursor-pointer">       
                <h1 className="md:text-sm text-xs text-fontPrimary font-light hover:text-accent underline">Crie sua conta</h1>
            </div>
        </form>
        
    );
};

export default LoginForm;