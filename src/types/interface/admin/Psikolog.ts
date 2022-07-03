export interface PsikologRequest {
	name: string;
	username: string;
	email: string;
	gender: string;
	biodata: string;
	tanggal_lahir: string;
	jenjang_pendidikan: string;
	nomor_hp: string;
	password: any;
	file_ijazah: string;
	surat_izin: string;
	images: string;
}

export interface Psikolog {
	_id: string;
	name: string;
	username: string;
	email: string;
	gender: string;
	roles?: string;
	biodata?: string;
	tanggal_lahir?: string;
	nomor_hp?: string;
	jenjang_pendidikan?: string;
	file_ijazah?: any[];
	surat_izin?: any[];
	images?: any[];
	createdAt?: Date;
	updatedAt?: Date;
	__v?: number;
}

interface data {
	token: string;
	psikolog: Psikolog;
}

export interface PsikologResponse {
	data: data;
}
