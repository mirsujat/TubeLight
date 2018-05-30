import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://build-burger-c3801.firebaseio.com/'
});

export default instance;
