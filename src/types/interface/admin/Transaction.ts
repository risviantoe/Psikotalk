export interface Payment {
	_id: string;
	nama_bank: string;
	norek: any;
	an: string;
	__v: number;
}

export interface Katalog {
	_id: string;
	konsultasi?: any;
	user: string;
	payment: Payment;
	__v: number;
}

export interface BuktiPembayaran {
	ETag: string;
	Location: string;
	key: string;
	Key: string;
	Bucket: string;
}

export interface Transaction {
	_id: string;
	katalog: Katalog;
	status: string;
	bukti_pembayaran: BuktiPembayaran[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}
