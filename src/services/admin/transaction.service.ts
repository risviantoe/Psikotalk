import api from '../api.service';
import { AxiosResponse } from 'axios';
import { Transaction } from '../../types';

export const getTransaction = async (): Promise<
	AxiosResponse<Transaction[]>
> => {
	return await api.get('transaction/all');
};

export const confirmTransaction = async (id: string, data: any): Promise<
	AxiosResponse<Transaction[]>
> => {
	return await api.put('transaction/' + id, data);
};

