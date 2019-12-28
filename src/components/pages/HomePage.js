import React from 'react';
// import { AuthUserContext }  from '../../session/index';
import { withRouter } from 'react-router-dom';
import { useAuthentication } from "../../session/AuthenticationProvider";


const HomePage = ({ history }) => {
    

    const login = () => {
        history.push('/login');
    }
    
    const {user, isAuthenticated}  = useAuthentication();
    const message = isAuthenticated ? `Bienvenido ${user}` : 'Bienvenido'

    return (
        
        <div className="jumbotron">
            <h1 className="display-4">{ message }</h1>
            <p className="lead">Esta página puede ser accedida por todos los usuarios</p>
            {
                user == null ?
                    <button type="button" onClick={ login } className="btn btn-outline-dark">Login</button>
                    : null
            }
        </div>
    );  
};

export default withRouter(HomePage);