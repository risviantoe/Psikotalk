import { RegisterRequest, RegisterResponse } from "../types/interface/auth/Register"
import api from "./api.service"

export const register = async (data: RegisterRequest): Promise<RegisterResponse> => {
    return await api.post('auth/signup', data);
}