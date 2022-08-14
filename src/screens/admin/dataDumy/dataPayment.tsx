export const theadData = ['No.', 'Avatar', 'Nama', 'Metode pembayaran', 'Tanggal'];

export const tbodyData = [
	{
		id: '1',
		items: [
			'1',
			<img
				className="table__avatar"
				src="/assets/images/profil01.png"
				alt="avatar"
			/>,
			<div className="table__column-name">Johnathan Alex</div>,
			'Transfer Bank',
			'22/05/2022',
		],
	},
	{
		id: '2',
		items: [
			'2',
			<img
				className="table__avatar"
				src="/assets/images/profil01.png"
				alt="avatar"
			/>,
			<div className="table__column-name">Edwin Risvianto</div>,
			'Transfer Bank',
			'22/05/2022',
		],
	},
	{
		id: '3',
		items: [
			'3',
			<img
				className="table__avatar"
				src="/assets/images/profil01.png"
				alt="avatar"
			/>,
			<div className="table__column-name">Muhammad Chandra Saputra</div>,
			'Transfer Bank',
			'22/05/2022',
		],
	},
];
