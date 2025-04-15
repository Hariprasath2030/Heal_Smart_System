import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './_components/Home';
import SignIn from './_components/SignIn';
import SignUp from './_components/SignUp';
import App from './App'
import { GlobalStyle } from "./styles/GlobalStyle";
import ContextProvider from "./context/Context";
import AIContextProvider from "./context/AIContext";
import FilterContextProvider from "./context/FilterContext";
import { ClerkProvider } from "@clerk/clerk-react";
import './index.css';

const clerkPublishableKey = "pk_test_ZnVsbC13YWhvby01MC5jbGVyay5hY2NvdW50cy5kZXYk";

if (!clerkPublishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      signInFallbackRedirectUrl="/app"
      signUpFallbackRedirectUrl="/sign-in"
    >
      <BrowserRouter>
        <ContextProvider>
          <AIContextProvider>
            <FilterContextProvider>
              <GlobalStyle />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/app" element={<App />} />
              </Routes>
            </FilterContextProvider>
          </AIContextProvider>
        </ContextProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
)