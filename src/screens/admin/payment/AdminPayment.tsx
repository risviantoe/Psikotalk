import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import Table from '../../../components/table/Table';
import { authService, transactionService } from '../../../services';
import { Transaction } from '../../../types';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/dataPayment';
import moment from 'moment';

import './AdminPayment.css';
import Button from '../../../components/button/Button';
import SekeletonTable from '../../../components/sekeletonLoading/SekeletonTable';

const AdminPayment: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
	const [showModalDetail, setShowModalDetail] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [transactions, setTransactions] = useState<Array<Transaction>>([]);
	const [proofOfPayment, setProofOfPayment] = useState<string>('');
	const [idSelected, setIdSelected] = useState<string>('')

	const getTransaction = async () => {
		setLoading(true);
		try {
			let res = await transactionService.getTransaction();
			setTransactions(res.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const getUser = (id: string) => {
		let data = ''
		let t = authService.user(id).then(res => {
			data = res.data.name
			return res.data.name
		})
		console.log(t.then(res => res));
		return data
	};

	// getUser('629035b75e22cb4a59ce868b').then((res) => <p>{res}</p>)
	

	const theadData = [
		'No.',
		'Avatar',
		'Nama',
		'Metode pembayaran',
		'Tanggal',
		// 'Status',
		'Aksi',
	];
	const tbodyData = transactions
		? transactions
				.filter((transaction) => transaction.status === 'Menunggu Konfirmasi')
				.map((item, index) => ({
					id: item._id,
					items: [
						index + 1,
						<img
							className="table__avatar"
							src="/assets/images/profil01.png"
							alt="avatar"
						/>,
						'Edwin Risvianto',
						// getUser(item.katalog.user),
						item.katalog.payment.nama_bank,
						moment(item.createdAt).format('DD MMMM YYYY'),
						// <span
						// 	style={
						// 		item.status === 'Menunggu Pembayaran'
						// 			? {
						// 					borderRadius: 20,
						// 					padding: '5px 14px',
						// 					fontSize: 14,
						// 					background: '#B0B0B0',
						// 					color: '#fff',
						// 			  }
						// 			: item.status === 'Menunggu Konfirmasi'
						// 			? {
						// 					borderRadius: 20,
						// 					padding: '5px 14px',
						// 					fontSize: 14,
						// 					background: '#4A90E2',
						// 					color: '#fff',
						// 			  }
						// 			: item.status === 'Pembayaran Berhasil'
						// 			? {
						// 					borderRadius: 20,
						// 					padding: '5px 14px',
						// 					fontSize: 14,
						// 					background: '#009595',
						// 					color: '#fff',
						// 			  }
						// 			: item.status === 'Pembayaran Gagal'
						// 			? {
						// 					borderRadius: 20,
						// 					padding: '5px 14px',
						// 					fontSize: 14,
						// 					background: '#F36868',
						// 					color: '#fff',
						// 			  }
						// 			: {}
						// 	}
						// >
						// 	{item.status}
						// </span>,
						<div className="table__actions-wrapper">
							<Button
								color={
									item.status !== 'Menunggu Konfirmasi'
										? 'disable'
										: 'primary'
								}
								name={
									item.status === 'Pembayaran Berhasil'
										? 'Dikonfirmasi'
										: 'Konfirmasi'
								}
								style={{
									borderRadius: 15,
									padding: '8px 14px',
									fontSize: 14,
								}}
								onClick={() => {
									setShowModalConfirm(true);
									setIdSelected(item._id)
								}}
								buttonConfig={{
									disabled:
										item.status !== 'Menunggu Konfirmasi',
								}}
							/>
							<Button
								color={
									item.status === 'Menunggu Pembayaran'
										? 'disable'
										: 'primary'
								}
								name="Lihat Bukti"
								style={{
									borderRadius: 15,
									padding: '8px 14px',
									fontSize: 14,
								}}
								onClick={() => {
									setShowModalDetail(true);
									setProofOfPayment(
										item.bukti_pembayaran &&
											item.bukti_pembayaran.length > 0
											? item.bukti_pembayaran[0].Location
											: ''
									);
								}}
								buttonConfig={{
									disabled:
										item.status === 'Menunggu Pembayaran',
								}}
							/>
						</div>,
					],
				}))
		: [];
	
	

	const confirm = async (id: string) => {
		setLoading(true)
		const data = {
			status: 'Pembayaran Berhasil',
		};
		try {
			let res = await transactionService.confirmTransaction(id, data);
			setLoading(false)
			setShowModalConfirm(false)
			getTransaction();
		} catch (error) {
			console.log(error);
			setLoading(false);
			setShowModalConfirm(false);
		}
	};

	useEffect(() => {
		getTransaction();
	}, []);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
			</div>
			<div className="admin__content--body">
				<div className="admin__client--content-wrapper">
					{loading ? (
						<SekeletonTable />
					) : (
						<Table theadData={theadData} tbodyData={tbodyData} />
					)}
				</div>
			</div>
			<Modal show={showModalConfirm} closeButton={false}>
				<ModalConfirmation
					text="Anda ingin melakukan Konfirmasi pembayaran Klien"
					okButtonText="Konfirmasi"
					onClose={() => setShowModalConfirm(false)}
					onOk={() => confirm(idSelected)}
					loading={loading}
				/>
			</Modal>
			<Modal
				show={showModalDetail}
				closeButton
				onClose={() => setShowModalDetail(false)}
			>
				<div className="modal-image-wrapper">
					<img src={proofOfPayment} alt="bukti-pembayaran" />
				</div>
			</Modal>
		</React.Fragment>
	);
};

export default AdminPayment;
