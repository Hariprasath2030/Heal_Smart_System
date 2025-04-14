import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
    throw new Error("Missing Clerk Publishable Key in .env");
}

export function ClerkProviderWithRoutes({ children }) {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            {children}
        </ClerkProvider>
    );
}
