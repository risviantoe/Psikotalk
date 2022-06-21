export interface User {
	name: string;
	email: string;
	gender: string;
	password: string;
	roles: string;
	images: any[];
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}