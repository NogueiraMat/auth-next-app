import Link from "next/link";
import LogoutForm from "./LogoutForm";

import { FaHome, FaFileSignature, FaGithubAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex flex-col items-center justify-between w-screen scroll-auto md:w-52 h-48 md:h-screen md:py-12 py-2 bg-primary text-fontPrimary shadow-2xl shadow-secondary">
           <div className="flex flex-col md:space-y-4 space-y-2">
            <Link className="flex items-center w-full space-x-2 font-meidum hover:text-accent text-xl" href="/"><FaHome /><h1>Inicio</h1></Link> 
            <Link className="flex items-center w-full space-x-2 font-medium hover:text-accent text-xl" href="/cadastro"><FaFileSignature /><h1>Cadastro</h1></Link> 
            <Link className="flex items-center w-full space-x-2 font-medium hover:text-accent text-xl" href="/characters"><FaGithubAlt /><h1>Personagens</h1></Link> 
           </div>
           <div className="md:absolute md:bottom-0 md:mb-12 md:left-0 md:ml-12">
            <LogoutForm />
           </div>
        </div>
    );
};

export default Navbar;