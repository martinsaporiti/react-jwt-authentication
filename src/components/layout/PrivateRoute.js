import React from "react";
import { Route} from "react-router-dom";
import useUserAuthenticated from '../../session/useUserAuthenticated';
import LoginPage from '../pages/LoginPage';

export function PrivateRoute({ component, ...options }){
    
    const isAuthenticated = useUserAuthenticated();
    return(
        isAuthenticated 
            ? <Route {...options} component={component} />
            : <LoginPage />        
    )
};


export default PrivateRoute;