import React from 'react';
import { UserProfile } from '@clerk/clerk-react';

function Profile() {
    return (
        <div style={{ marginTop: '2rem' }}>
            <UserProfile />
        </div>
    );
}

export default Profile;
