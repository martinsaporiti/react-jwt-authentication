import React, {useState,useEffect} from 'react';
import AuthenticationService from '../services/authentication.service';
import AuthUserContext from './context';
import { authSubject } from '../services/authentication.service';


//TODO: Pasar a Hooks
// https://stackoverflow.com/questions/56351203/change-hoc-wrapper-component-with-its-own-state-to-react-hooks


const withAuthentication = (WrappedComponent , props) => {

    return function(props){

        const [authUser, setaAthUser] = useState(null);

 
        useEffect(
            () => {
                const authUser = AuthenticationService.getAuthUser();
                setaAthUser(authUser);
                authSubject.subscribe(data => setaAthUser({ authUser: data }));
            }
        , []);

        return (
            <AuthUserContext.Provider value={ authUser }>
                <WrappedComponent {...props} />
            </AuthUserContext.Provider>
        );
    }
};

export default withAuthentication;