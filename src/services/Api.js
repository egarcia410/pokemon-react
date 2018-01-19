import axios from 'axios';

var location = window.location;

// Creates an instance of axios, setting the base URL to link up with the backend
export default () => {
    var url;
    if (location.port) {
        // For development
        url = 'http://localhost:8081'
    } else {
        // For production
        url = location.protocol + '//' + location.hostname;
    }
    return axios.create({
        baseURL: url
    })
}