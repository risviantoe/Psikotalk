import api from '../api.service';
import { Consultation, ConsultationRequest } from '../../types';
import { AxiosResponse } from 'axios';

export const consultationGet = async (): Promise<
	AxiosResponse<Consultation[]>
> => {
	return await api.get('konsultasi/admin');
};