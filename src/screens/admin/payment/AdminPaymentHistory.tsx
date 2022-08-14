import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import Table from '../../../components/table/Table';
import { transactionService } from '../../../services';
import { Transaction } from '../../../types';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/dataPayment';

import './AdminPayment.css';

const AdminPaymentHistory: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	})
	

	const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
	const [showModalDetail, setShowModalDetail] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [transactions, setTransactions] = useState<Array<Transaction>>([]);
	const [proofOfPayment, setProofOfPayment] = useState<string>('');

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

	useEffect(() => {
		getTransaction();
	}, []);

	const theadData = [
		'No.',
		'Avatar',
		'Nama',
		'Metode pembayaran',
		'Tanggal',
		'Aksi',
	];

	const tbodyData = transactions
		? transactions
				.filter(
					(transaction) =>
						transaction.status === 'Pembayaran Berhasil'
				)
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

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
			</div>
			<div className="admin__content--body">
				<div className="admin__client--content-wrapper">
					<Table theadData={theadData} tbodyData={tbodyData} />
				</div>
			</div>
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

export default AdminPaymentHistory;
