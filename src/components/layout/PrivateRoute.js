import React from "react";
import { Route} from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import { useAuthentication } from "../../session/AuthenticationProvider";

export function PrivateRoute({ component, ...options }){
    
    const auth = useAuthentication();
    const isAuthenticated = auth.isAuthenticated

    return(
        isAuthenticated 
            ? <Route {...options} component={component} />
            : <LoginPage />        
    )
};


export default PrivateRoute;