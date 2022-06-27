import api from '../api.service';
import { Post } from '../../types';
import { AxiosResponse } from 'axios';

export const postGet = async (): Promise<AxiosResponse<Post[]>> => {
	return await api.get('article');
};
