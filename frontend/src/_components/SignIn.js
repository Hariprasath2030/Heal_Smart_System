import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import img from "../img/signin.jpg";

function SignInPage() {
  return (
    <div className="relative w-full min-h-screen overflow-auto">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={img}
          alt="Smart Health Care System"
          className="w-full h-full object-cover blur-sm brightness-75"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16 py-12 gap-12 lg:gap-24">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Transform your <br />
            <span className="text-rose-500">Health Management</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Monitor your health, schedule appointments, and access your medical records all in one place. Smart health care made easy!
          </p>

          {/* Buttons - Responsive Stack */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-black transition duration-300 text-center"
            >
              Explore Health Care Portal
            </Link>
            <span className="text-white font-semibold">OR</span>
            <Link
              to="/sign-up"
              className="rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-black transition duration-300 text-center"
            >
              Register with Heal-Smart AI
            </Link>
          </div>
        </div>

        {/* Sign In Box */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg">
          <SignIn routing="hash" />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
