import { useState, useEffect } from 'react';
import AuthenticationService from '../services/authentication.service';

function useUserProfile() {
  
    const [profile, setProfile] = useState(null);

    function handleStatusChange(authUser) {
        setProfile(authUser);
    }

    useEffect(() => {
        const authUser = AuthenticationService.getAuthUser();
        handleStatusChange(authUser);
    });

    return profile;
}

export default useUserProfile;
