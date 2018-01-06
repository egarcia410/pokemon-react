import axios from 'axios';

// Creates an instance of axios, setting the base URL to link up with the backend
export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081'
    });
};