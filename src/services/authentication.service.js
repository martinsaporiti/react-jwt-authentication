import axios from 'axios';
import { handleResponse } from '../helpers/handle-response';
// import { Subject } from 'rxjs'

// export const authSubject = new Subject()

class AuthenticationService {

  constructor() {
    this.getAuthUser = this.getAuthUser.bind(this);
    this.getToken = this.getToken.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getAuthUser() {
    const user = localStorage.getItem('user');
    return user;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return this.getAuthUser() !== null;
  }


  signIn(username, password) {
    return new Promise( (resolve, reject) => {
      console.log('por autenticarse', process.env.REACT_APP_MY_VARIABLE_API_URL);
      axios.post(`${process.env.REACT_APP_MY_VARIABLE_API_URL}auth/login/`, { 'email' : username, 'password': password })
      .then(handleResponse)
      .then( data => {
        localStorage.setItem('token', JSON.stringify(data.access_token));
        localStorage.setItem('user', JSON.stringify(data.user));
        // authSubject.next(data.user);
        resolve(data.user);
      })
      .catch(err => {
        reject(null);
      })
    });
    

  }


  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); 
    // authSubject.next(null);
  }

}

const authenticationService = new AuthenticationService();
export default authenticationService;
