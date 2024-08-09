import { AuthContext } from "@/app/contexts/AuthContext";
import { FormEvent, useContext } from "react";
import { useRouter } from "next/navigation";

import { BsBoxArrowLeft } from "react-icons/bs";

const LogoutForm = () => {
    const { logout } = useContext(AuthContext);
    const router = useRouter();

    async function handleLogout(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        try {
            await logout();
            router.push('/login')
        } catch (error) {
            throw error;
        }
    }
    return (
        <form onSubmit={(e) => handleLogout(e)}>
            <button type="submit" className="md:w-24 md:h-12 w-18 h-8 bg-accent hover:bg-secondary rounded-md shadow-lg shadow-secondary">
                <div className="w-full flex items-center justify-center content-center md:space-x-2 space-x-1 px-4 cursor-pointer" >
                    <BsBoxArrowLeft size={20}/>
                    <label className="cursor-pointer md:text-md text-sm">Sair</label>
                </div>
            </button>
        </form>
    );
}

export default LogoutForm;