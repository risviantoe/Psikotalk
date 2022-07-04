import api from '../api.service';
import { Consultation, ConsultationRequest } from '../../types';
import { AxiosResponse } from 'axios';

export const consultationGet = async (): Promise<AxiosResponse<Consultation[]>> => {
	return await api.get('konsultasi');
};

export const consultationPost = async (data: ConsultationRequest): Promise<AxiosResponse<Consultation[]>> => {
	return await api.post('konsultasi', data);
};

export const consultationDetail = async (id: string): Promise<AxiosResponse<Consultation>> => {
	return await api.get('konsultasi/admin/' + id);
};

export const consultationDelete = async (id: string): Promise<AxiosResponse<Consultation[]>> => {
	return await api.delete('konsultasi/' + id);
};

export const consultationUpdate = async (
	id: string,
	data: ConsultationRequest
): Promise<AxiosResponse<Consultation[]>> => {
	return await api.put('konsultasi/admin/' + id, data);
};
