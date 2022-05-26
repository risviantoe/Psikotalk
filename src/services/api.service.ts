import axios, { AxiosRequestConfig } from "axios";

const main = axios.create({
    baseURL: 'https://ptalk-backend-api.herokuapp.com/',
});

main.interceptors.request.use(
	function (config: AxiosRequestConfig) {
		// Do something before request is sent
		// const userToken = storageService.getToken() || '';
        config.headers = {
            'Access-Control-Allow-Credentials' : 'true',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
		};

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

export default main