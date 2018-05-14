import axios from 'axios';

// Creating and using axios instance

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';

// instance.interceptors.request...

export default instance;
