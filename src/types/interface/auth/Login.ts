import { User } from '../user/User';

export interface LoginRequest {
	email: string;
	password: string;
}

export interface Data {
	data: LoginData
}

export interface LoginData {
	token: string;
	users: User;
}

export interface LoginResponse {
	data: LoginData;
}
