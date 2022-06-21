export interface PsikologRequest {
	name: string;
	username: string;
	email: string;
	gender: string;
	biodata: string;
	tanggal_lahir: string;
	nomor_hp: string;
	password: string;
	file_ijazah: any[];
	surat_izin: any[];
	images: any[];
}

export interface Psikolog {
	name: string;
	username: string;
	email: string;
	gender: string;
	password: string;
	roles: string;
	biodata: string;
	tanggal_lahir: Date;
	nomor_hp: string;
	file_ijazah: any[];
	surat_izin: any[];
	images: any[];
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface PsikologData {
	token: string;
	psikolog: Psikolog;
}

export interface PsikologResponse {
	data: PsikologData;
}
