import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';

import backgroundImage from '../img/home.jpeg';

export default function Home() {
    const { isSignedIn } = useUser(); 
    const navigate = useNavigate();  

    useEffect(() => {
        if (isSignedIn) {
            navigate('/app');  
        }
    }, [isSignedIn, navigate]);

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative max-w-3xl text-center z-10">
                <h1 className="text-4xl md:text-5xl font-bold  text-emerald-500 mb-6 animate-fadeIn">
                    Welcome to AI Smart Healthcare
                </h1>
                <p className="text-lg md:text-xl text-white mb-8">
                    Empowering health through intelligent AI solutions.
                    Accessible, efficient, and personalized care for everyone.
                </p>

                <SignedOut>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Link to="/sign-up">
            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:from-green-600 hover:to-emerald-500 transition duration-300">
                Sign Up
            </button>
        </Link>
        <Link to="/sign-in">
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
                Sign In
            </button>
        </Link>
    </div>
</SignedOut>

            </div>
        </div>
    );
}