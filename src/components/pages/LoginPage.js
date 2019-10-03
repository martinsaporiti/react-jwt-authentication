import React, {useState} from 'react';
import authenticationService from '../../services/authentication.service';
import { withRouter } from 'react-router-dom';
import { useAuthentication } from "../../session/AuthenticationProvider";

const LoginPage = ( { history } ) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(false);
    
    const auth = useAuthentication();
    
    const login = async (e) => {
        e.preventDefault();
        authenticationService.signIn(email, password).then(user => {
            console.log(user);
            auth.login(user);
            history.push('/');
        })
        .catch( err => {
            console.log(err);
        })
        
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card mt-5">
                    <div className="card-body">
                        <h2 className="text-center py-4">
                            <i className="fas fa-lock"></i> {''}
                            Iniciar Sesión
                        </h2>

                        <form
                            onSubmit={ login }
                        >
                            <div className="form-group">
                                <label>Email:</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    required
                                    value={ email }
                                    onChange={ e => setEmail(e.target.value) }
                                />
                            </div>

                            <div className="form-group">
                                <label>Password:</label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    required
                                    value={ password }
                                    onChange={ e => setPassword(e.target.value) }
                                />
                            </div>

                            <input 
                                type="submit"
                                className="btn btn-success btn-block"
                                value="Inicar Sesión"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(LoginPage);