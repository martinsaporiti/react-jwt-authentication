import authenticationService  from '../services/authentication.service';

export function handleResponse(response) {
    
    if (!response.status) {
        if ([401, 403].indexOf(response.status) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            authenticationService.logout();
        }

        const error = (response.data && response.data.message) || response.statusText;
        return Promise.reject(error);
    }

    return response.data;

}