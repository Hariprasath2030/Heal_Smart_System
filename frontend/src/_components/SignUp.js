import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import img from "../img/signup.jpeg"; // Replace this with your signup background image

function SignUpPage() {
    return (
        <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={img}
                    alt="Smart Health Care SignUp"
                    fill
                    quality={100}
                    className="w-full h-full object-cover blur-sm brightness-75"
                    loading="eager"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="text-center lg:text-left max-w-2xl">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">

                        Join the <span className="text-rose-500">Smart Health Revolution</span>
                    </h1>
                    <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                        Sign up to manage appointments, access reports, and take charge of your health journey.
                    </p>

                    {/* Back to Home Button */}
                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 text-center">
                        <Link
                            to="/sign-in"
                            className="inline-block rounded-md  bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-black transition duration-300"
                        >
                            Click to Login
                        </Link>
                    </div>
                </div>

                {/* Sign Up Box */}
                <div className="mt-12 sm:mt-0 sm:ml-40 flex justify-center sm:justify-end">
                    <div className="w-full sm:w-auto bg-white/10 backdrop-blur-md p-6 rounded-lg">
                        <SignUp routing="hash" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
