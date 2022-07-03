import api from '../api.service';
import { Psikolog, PsikologRequest, PsikologResponse } from '../../types';
import { AxiosResponse } from 'axios';

export const psikologGet = async (): Promise<AxiosResponse<Psikolog[]>> => {
	return await api.get('auth/psikolog');
};

export const detailPsikologGet = async (id: string): Promise<AxiosResponse<Psikolog>> => {
	return await api.get('auth/psikolog/' + id);
};

export const updatePsikolog = async (
	id: string, data: PsikologRequest
): Promise<AxiosResponse<PsikologResponse>> => {
	return await api.put('auth/psikolog/' + id, data);
};

export const psikologDelete = async (
	id: string
): Promise<AxiosResponse<Psikolog[]>> => {
	return await api.delete('auth/psikolog/' + id);
};
