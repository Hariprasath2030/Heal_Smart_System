import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';

// Import your background image
import backgroundImage from '../img/home.jpeg'; // <-- Update to correct path!

export default function Home() {
    const { isSignedIn } = useUser();  // 👈 get the sign-in status
    const navigate = useNavigate();    // 👈 for navigation

    useEffect(() => {
        if (isSignedIn) {
            navigate('/app');  // 👈 Redirect to your dashboard or app page
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
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative max-w-3xl text-center z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6 animate-fadeIn">
                    Welcome to AI Smart Healthcare
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                    Empowering health through intelligent AI solutions.
                    Accessible, efficient, and personalized care for everyone.
                </p>

                {/* SignedOut section */}
                <SignedOut>
                    <div className="flex gap-4 justify-center mt-4">
                        <Link to="/sign-up">
                            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-black transition">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/sign-in">
                            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition">
                                Sign In
                            </button>
                        </Link>
                    </div>
                </SignedOut>

                {/* SignedIn section */}
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
}
