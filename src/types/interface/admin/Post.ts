export interface Post {
	_id: string;
	title: string;
	author: string;
	category: string;
	description: string;
	images: any[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}
