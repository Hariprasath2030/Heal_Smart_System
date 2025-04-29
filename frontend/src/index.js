import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import App from './App'
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
      signInFallbackRedirectUrl="/Home"
      signUpFallbackRedirectUrl="/sign-in"
    >
      <BrowserRouter>
        <ContextProvider>
          <AIContextProvider>
            <FilterContextProvider>
              <App/>
            </FilterContextProvider>
          </AIContextProvider>
        </ContextProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
)