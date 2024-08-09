'use client'

import { useState, createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [user, setUser] = useState(null);

    const checkAuth = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user/me", {
                method: 'GET',
                credentials: 'include', 
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setIsAuthenticate(true);
            setUser(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setIsAuthenticate(false);
            setUser(null);
        }
    }
    
    const login = async (username: string, password: string) => {
        try {
            const response = await fetch("http://localhost:5000/public/user/auth", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            });

            // const res = await response.json();
            if (!response.ok) {
                return response;
            }
            
            setIsAuthenticate(true);
            return response;
        } catch (error) {
            console.error('Error during login:', error);
            setIsAuthenticate(false);
            throw error;
        }
    }    

    const logout = async () => {
        try {
            const response = await fetch("http://localhost:5000/public/user/logout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const res = await response.json();
            setIsAuthenticate(false);
            return res.data;
        } catch (error) {
            setIsAuthenticate(false);
            throw error
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticate, user, login, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;
