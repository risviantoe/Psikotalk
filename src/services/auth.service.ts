import {
	RegisterRequest,
	RegisterResponse,
	LoginRequest,
	LoginResponse,
	User,
} from '../types';
import api from "./api.service"

export const register = async (data: RegisterRequest): Promise<RegisterResponse> => {
    return await api.post('auth/signup', data);
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
	return await api.post('auth/login', data);
};

export const loginPsikolog = async (data: LoginRequest): Promise<LoginResponse> => {
	return await api.post('auth/psikolog/login', data);
};

export const user = (id: string): Promise<User> => {
	return api.get('auth/find/' + id);
};