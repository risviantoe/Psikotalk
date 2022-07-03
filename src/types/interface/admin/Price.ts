export interface PriceRequest {
	opsi: string;
	normal_price: number;
	discount: number;
	fix_price: number;
}

export interface Price {
	_id: string;
	opsi: string;
	normal_price: number;
	discount: number;
	fix_price: number;
	__v: number;
}

export interface PriceResponse {
	opsi: string;
	normal_price: number;
	discount: number;
	fix_price: number;
	_id: string;
	__v: number;
}
