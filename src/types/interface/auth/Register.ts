import { User } from "../user/User";

export interface RegisterRequest {
	name: string;
	email: string;
	gender: string;
	password: string;
}

export interface Data {
	token: string;
	user: User;
}

export interface RegisterResponse {
	data: Data;
}