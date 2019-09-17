import React, {useState} from 'react';
import { AuthUserContext }  from '../../session/index';
import {withRouter} from 'react-router-dom';


const HomePage = ({history}) => {
    
    const[user, setUser] = useState('');

    const login = () => {
        history.push('/login');
    }
    
    return (
        <AuthUserContext.Consumer>
            {
                authUser => {
                
                    setUser(authUser)
                    const message = user ? `Bienvenido ${user}` : 'Bienvenido'
                    return(
                        <div className="jumbotron">
                            <h1 className="display-4">{ message }</h1>
                            <p className="lead">Esta página puede ser accedida por todos los usuarios</p>
                            {
                                authUser === null ?
                                    <button type="button" onClick={login} class="btn btn-outline-dark">Login</button>
                                    : null
                            }

                        </div>
                    )
                }
            }                        
        </AuthUserContext.Consumer>

    );  
};

export default withRouter(HomePage);