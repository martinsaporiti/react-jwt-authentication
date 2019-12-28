
import axios from 'axios';

import {authHeader} from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

export const productoService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };    
    return new Promise( (resolve, reject) => {
        axios.get(`${process.env.REACT_APP_MY_VARIABLE_API_URL}products`, requestOptions)
        .then(handleResponse)
        .then(data => {
            resolve(data);
        })
    });

}