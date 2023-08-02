import axios from 'axios';
import * as Keychain from 'react-native-keychain';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

api.interceptors.request.use(
    async (config) => {
        try {
            // Fetch the access token from the Keychain
            const credentials = await Keychain.getGenericPassword();

            // Add the access token to the request headers
            if (credentials) {
                const accessToken = credentials?.password;
                config.headers.Authorization = `Bearer ${accessToken}`;
            }

            return config;
        } catch (error) {
            // Handle error if fetching the access token fails
            console.error('Error fetching access token:', error);
            return config;
        }
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

export default api;
