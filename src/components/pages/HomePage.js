import React from 'react';
// import { AuthUserContext }  from '../../session/index';
import useUserAuthenticated from '../../session/useUserAuthenticated';
import useUserProfile from '../../session/useUserProfile';
import {withRouter} from 'react-router-dom';


const HomePage = ({history}) => {
    
    // const[user, setUser] = useState('');

    const login = () => {
        history.push('/login');
    }
    
    const isAuthenticated = useUserAuthenticated();
    const profile = useUserProfile();
    const message = isAuthenticated ? `Bienvenido ${profile}` : 'Bienvenido'

    return (
        
        <div className="jumbotron">
            <h1 className="display-4">{ message }</h1>
            <p className="lead">Esta página puede ser accedida por todos los usuarios</p>
            {
                !isAuthenticated ?
                    <button type="button" onClick={login} class="btn btn-outline-dark">Login</button>
                    : null
            }
        </div>
    );  
};

export default withRouter(HomePage);