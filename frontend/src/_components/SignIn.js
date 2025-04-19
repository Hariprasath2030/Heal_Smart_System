import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import img from '../img/signin.jpg';

function SignInPage() {
  return (
    <div className="relative w-full h-screen bg-pink-500 overflow-auto">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={img}
          alt="Smart Health Care System"
          className="w-full h-full object-cover blur-sm brightness-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-emerald-900/50" />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16 py-12 gap-12 lg:gap-24">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Empower Your <br />
            <span className="text-black text-6xl text-bold">Health Journey</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Stay in control of your wellness. Book appointments, track your vitals, and access your health records anytime, anywhere.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4">
            <Link
              to="/"
              className="rounded-md bg-cyan-500 px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-600 transition duration-300"
            >
              Explore Health Portal
            </Link>
            <span className="text-white font-medium">OR</span>
            <Link
              to="/sign-up"
              className="rounded-md bg-cyan-500 px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-600 transition duration-300"
            >
              Join Heal-Smart AI
            </Link>
          </div>
        </div>

        {/* Sign In Box */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-0 sm:p-8 rounded-xl shadow-2xl border border-white/20">
          <SignIn routing="hash" appearance={{ elements: { formButtonPrimary: "bg-emerald-600 hover:bg-emerald-700 text-white" } }} />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
