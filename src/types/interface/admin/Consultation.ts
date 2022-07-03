import { Psikolog } from './Psikolog';
import { Price } from './Price';

export interface ConsultationRequest {
	jadwal: Date;
	category: string;
	psikolog: string;
}

export interface Consultation {
	_id: string;
	jadwal: Date;
	category: string;
	psikolog: Psikolog;
	prices: Price[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}
