import api from '../api.service';
import { Price, PriceRequest, PriceResponse } from '../../types';
import { AxiosResponse } from 'axios';

export const priceGet = async (): Promise<AxiosResponse<Price[]>> => {
	return await api.get('price');
};

export const priceCreate = async (data: PriceRequest): Promise<AxiosResponse<PriceResponse>> => {
	return await api.post('price', data);
};
