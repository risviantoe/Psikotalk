import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import Table from '../../../components/table/Table';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/dataPayment';

import './AdminPayment.css';

const AdminPaymentHistory: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
	const [showModalDetail, setShowModalDetail] = useState<boolean>(false);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
			</div>
			<div className="admin__content--body">
				<div className="admin__client--content-wrapper">
					<Table
						theadData={theadData}
						tbodyData={tbodyData}
						actionColumn
						action1={{
							name: 'Dikonfirmasi',
							color: 'disable',
							onClick: () => setShowModalConfirm(true),
							buttonConfig: { disabled: true },
						}}
						action2={{
							name: 'Lihat Bukti',
							color: 'primary',
							onClick: () => setShowModalDetail(true),
						}}
					/>
				</div>
			</div>
			<Modal show={showModalConfirm} closeButton={false}>
				<ModalConfirmation
					text="Anda ingin melakukan Konfirmasi pembayaran Klien"
					okButtonText="Konfirmasi"
					onClose={() => setShowModalConfirm(false)}
				/>
			</Modal>
			<Modal
				show={showModalDetail}
				closeButton
				onClose={() => setShowModalDetail(false)}
			>
				<div className="modal-image-wrapper">
					<img
						src="/assets/images/bukti-pembayaran.png"
						alt="bukti-pembayaran"
					/>
				</div>
			</Modal>
		</React.Fragment>
	);
};

export default AdminPaymentHistory;
