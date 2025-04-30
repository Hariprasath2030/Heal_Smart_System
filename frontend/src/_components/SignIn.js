import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import img from '../img/signin.jpg';

function SignInPage() {
  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-auto font-sans">
      {/* Background Image with light overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={img}
          alt="Smart Health Care System"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 py-10 gap-12">
        {/* Left Text Block */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Empower Your <br />
            <span className="text-emerald-600">Health Journey</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700">
            Stay in control of your wellness. Book appointments, track your vitals, and access your health records anytime, anywhere.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-start items-center gap-4">
            <Link
              to="/"
              className="rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 transition-shadow shadow-md hover:shadow-lg"
            >
              Explore Health Portal
            </Link>
            <span className="text-gray-600 font-semibold">OR</span>
            <Link
              to="/sign-up"
              className="rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-3 transition-shadow shadow-md hover:shadow-lg"
            >
              Join Heal-Smart AI
            </Link>
          </div>
        </div>

        {/* Sign In Card with Blur */}
        <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/30 bg-white/40 shadow-xl backdrop-blur-lg">
          <SignIn
            routing="hash"
            appearance={{
              elements: {
                card: "bg-transparent shadow-none",
                formButtonPrimary:
                  "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-md",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
