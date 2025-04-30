import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import img from "../img/signup.jpeg"; // Replace this with your signup background image

function SignUpPage() {
  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-auto font-sans">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={img}
          alt="Smart Health Care SignUp"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 py-10 gap-12">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Join the <br />
            <span className="text-emerald-600">Smart Health Revolution</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700">
            Sign up to manage appointments, access reports, and take charge of your health journey.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-start items-center gap-4">
            <Link
              to="/sign-in"
              className="rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-3 transition-shadow shadow-md hover:shadow-lg"
            >
              Click to Login
            </Link>
          </div>
        </div>

        {/* Sign Up Card with Blur */}
        <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/30 bg-white/40 shadow-xl backdrop-blur-lg">
          <SignUp
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

export default SignUpPage;
