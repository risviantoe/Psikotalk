import axios, { AxiosRequestConfig } from "axios";
import { storageService } from ".";

const main = axios.create({
	// baseURL: 'https://api.psikotalk.com/',
	baseURL: 'https://ptalk-backend-api.herokuapp.com/',
});

main.interceptors.request.use(
	function (config: AxiosRequestConfig) {
		// Do something before request is sent
		const userToken = storageService.getToken() || '';
		config.headers = {
			Authorization: userToken,
		};

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

export default main