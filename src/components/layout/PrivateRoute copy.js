import React from "react";
import { Route} from "react-router-dom";
import { AuthUserContext }  from '../../session/index';
import LoginPage from '../pages/LoginPage';

export function PrivateRoute({ component, ...options }){
    
    return( 
        <AuthUserContext.Consumer>
             {authUser => authUser ?
                        <Route {...options} component={component} />
                    :
                        <LoginPage />
             }
        </AuthUserContext.Consumer> 
    )

};


export default PrivateRoute;