import api from './api.service';
import { PsikologRequest, PsikologResponse } from '../types'

export const psikologRegister = async (data: PsikologRequest): Promise<PsikologResponse> => {
	return await api.post('auth/psikolog/signup', data);
};