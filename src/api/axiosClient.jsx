// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        const token = await currentUser.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosClient;