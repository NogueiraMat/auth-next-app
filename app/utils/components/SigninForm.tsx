'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

const SigninForm = () => {
    const router = useRouter();
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<null | string>(null)
    const [success, setSuccess] = useState<null | string>(null)
    const [viewPass, setViewPass] = useState<boolean>(false)

    function handleMessage(message: string, isError: boolean = false) {
        if (isError) {
            setError(message);
        } else {
            setSuccess(message)
        }
        setTimeout(() => {
            setError(null);
            setSuccess(null);
        }, 1000);
    }
    async function handleSignin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/public/user", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: user,
                    first_name: name,
                    last_name: lastname,
                    email: email,
                    password: password
                })
            });
            
            const data = await res.json()
            if (!res.ok) {  
                handleMessage(data["detail"], true)
                return
            }

            handleMessage(data["message"]);
            setTimeout(() => {router.push('/login')}, 1000)
            
        } catch (error) {
            throw error;
        }
    }

    return (
        <form onSubmit={(e) => handleSignin(e)} className='flex flex-col w-full h-full md:px-4 space-y-2 justify-center'>
            {
                error ? (
                    <div className="flex absolute z-10 top-0 w-64 h-16 bg-fontPrimary border-red-400 border-b-2 shadow-md rounded-b-sm self-center items-center justify-center text-xs text-red-500"><h1>{error}</h1></div>
                ) : ( success && 
                    <div className="flex absolute z-10 top-0 w-64 h-16 bg-fontPrimary border-green-400 border-b-2 shadow-md rounded-b-sm self-center items-center justify-center text-xs text-green-500"><h1>{success}</h1></div>
                )
            }
            <div className='flex flex-col space-y-1 px-4'>
                <label className='text-fontPrimary font-bold text-lg'>Usuário</label>
                <input 
                    type="text" 
                    className='md:h-10 h-8 px-2 md:text-lg text-sm text-primary rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary' 
                    placeholder="Digite seu usuário" 
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={() => setViewPass(prev => !prev)} className='absolute inset-y-0 right-0 pr-8 pt-8 flex cursor-pointer items-center'>
                    {viewPass ? 
                        <GrFormView size={24} className="text-secondary"/> : 
                        <GrFormViewHide size={24} className="text-secondary"/>
                    }
                </div>
            </div>
            <div className='flex flex-col space-y-1 px-4'>
                <label className='text-fontPrimary font-bold text-lg'>Nome</label>
                <input 
                    type="text" 
                    className='md:h-10 h-8 px-2 md:text-lg text-sm text-primary rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary' 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='flex flex-col space-y-1 px-4'>
                <label className='text-fontPrimary font-bold text-lg'>Sobrenome</label>
                <input 
                    type="text" 
                    className='md:h-10 h-8 px-2 md:text-lg text-sm text-primary rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary' 
                    placeholder="Digite seu usuário" 
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </div>
            <div className='flex flex-col space-y-1 px-4'>
                <label className='text-fontPrimary font-bold text-lg'>Email</label>
                <input 
                    type="text" 
                    className='md:h-10 h-8 px-2 md:text-lg text-sm text-primary rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary' 
                    placeholder="exemplo@exemplo.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='flex flex-row space-y-1 px-4 items-end justify-end space-x-4'>
                <button type="submit" className='flex items-center justify-center md:w-24 w-16 md:h-12 h-8 md:text-lg text-sm text-fontPrimary bg-secondary hover:bg-accent p-1 space-x-1 rounded-md'>
                    <FaUserPlus size={25}/><h1 className="md:text-lg text-xs">criar</h1>
                </button>
            </div>
            <div onClick={() => {router.push("/login")}} className="flex flex-col px-4 items-end cursor-pointer">       
                <h1 className="md:text-sm text-xs text-fontPrimary font-light hover:text-accent underline">Acesse sua conta</h1>
            </div>
        </form>
    );
}

export default SigninForm;