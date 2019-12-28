import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { useAuthentication } from "../../session/AuthenticationProvider";



const Navbar = ({ history }) => {
    
    const auth = useAuthentication();

    const isAuthenticated = auth.isAuthenticated;

    const NavBarComponent = (isAuthenticated) ? <NavigationAuth handleLogOut = {auth.logout}/> 
                                              : <NavigationNonAuth />
    return (
        NavBarComponent
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
                </ul>
                <div className="nav-item float-right">
                    <button type="button" className="btn btn-link" onClick={ handleLogOut}>Logout</button>
                </div>
            </div>
        </div>
    </nav>
);
  
const NavigationNonAuth = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link to={ROUTES.HOME} className="navbar-brand">
                Buy.com
            </Link>
        </div>
    </nav>
);

export default withRouter(Navbar);