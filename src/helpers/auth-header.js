import authenticationService  from '../services/authentication.service';

export function authHeader() {
    const token = authenticationService.getToken();
    if (token) {
        return { 
            'Content-Type' : 'application/json; charset=utf-8',
            'Authorization': `Bearer ${token}`,
        };
    } else {
        return {};
    }
}