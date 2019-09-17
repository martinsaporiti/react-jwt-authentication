import React from 'react';
import { AuthUserContext }  from '../../session/index';
import { Link, NavLink } from 'react-router-dom';
import authenticationService from '../../services/authentication.service';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';



const Navbar = ({history}) => {
    
    const signOut = () => {
        authenticationService.signOut();
        history.push(ROUTES.HOME);
    }

    return (
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth 
                            handleLogOut = {signOut}
                            /> 
                            : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    );

};




const NavigationAuth = ({handleLogOut}) => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link to={ROUTES.HOME} className="navbar-brand">
                    Buy.com
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to={ROUTES.PRODUCTS} className="nav-link" activeClassName="active">
                            Productos
                        </NavLink>
                    </li>

                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">Account <span className="sr-only">(current)</span></a>
                    </li> */}
                    {/* <li className="nav-item float-right">
                        <a className="nav-link float-right" href="#" onClick={ handleLogOut} >Logout <span className="sr-only">(current)</span></a>
                    </li> */}
                </ul>
                <div className="nav-item float-right">
                    <button type="button" className="btn btn-link" onClick={ handleLogOut }>Logout</button>
                </div>
            </div>
        </div>
    </nav>
);
  
const NavigationNonAuth = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link to="/" className="navbar-brand">
                Web App
            </Link>
        </div>
    </nav>
);

export default withRouter(Navbar);