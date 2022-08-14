import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import SekeletonTable from '../../../components/sekeletonLoading/SekeletonTable';
import Table from '../../../components/table/Table';
import { priceService } from '../../../services';
import { Price } from '../../../types';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/dataPrice';

const AdminPrice: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	const navigate = useNavigate();

	const [prices, setPrices] = useState<Array<Price>>([]);
	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const getPrices = async () => {
		setLoading(true);
		try {
			let res = await priceService.priceGet();
			setPrices(res.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const onClickAction = (id: string) => {
		navigate('/admin/price/edit/'+id)
	}

	const formatRupiah = (value: any) => {
		return value
			.toString()
			.split('')
			.reverse()
			.join('')
			.match(/\d{1,3}/g)
			.join('.')
			.split('')
			.reverse()
			.join('');
	};

	const theadData = ['No', 'Nama Paket', 'Harga', 'Diskon', 'Harga setelah diskon'];
	// const tbodyData = prices
	// 	? prices.map((item, index) => ({
	// 			id: item._id,
	// 			items: [
	// 				index + 1,
	// 				item.opsi,
	// 				'Rp ' + formatRupiah(item.normal_price),
	// 				item.discount + '%',
	// 				'Rp ' + formatRupiah(item.fix_price),
	// 			],
	// 	  }))
	// 	: [];
	const tbodyData = [
		{
			id: '1',
			items: [
				'1',
				'Konsultasi Video Meeting',
				'Rp 10.000',
				'10%',
				'Rp 9.000',
			],
		},
	];

	useEffect(() => {
		getPrices();
	}, []);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
				<div className="content-top-menu-action">
					<Button
						name="+ Tambah"
						onClick={() => navigate('/admin/price/add')}
						style={{ borderRadius: 30 }}
					/>
				</div>
			</div>
			<div className="admin__content--body">
				<div className="admin__post--content-wrapper">
					{loading ? (
						<SekeletonTable />
					) : (
						<Table
							theadData={theadData}
							tbodyData={tbodyData}
							actionColumn
							columnMaxWidth={500}
							action1={{
								name: 'Edit harga',
								color: 'primary',
								icon: 'icon-edit',
								onClickUpdate: (e) => onClickAction(e),
							}}
							action2={{
								name: 'Hapus',
								color: 'danger',
								icon: 'icon-delete',
								onClick: () => setShowModalDelete(true),
							}}
						/>
					)}
				</div>
			</div>
			<Modal show={showModalDelete} closeButton={false}>
				<ModalConfirmation
					text="Apakah anda yakin ingin menghapus data harga ini?"
					okButtonText="Hapus"
					onClose={() => setShowModalDelete(false)}
				/>
			</Modal>
		</React.Fragment>
	);
};

export default AdminPrice;
