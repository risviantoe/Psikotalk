import React, { useState } from 'react';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Table from '../../../components/table/Table';
import { theadData, tbodyData } from '../dataDumy/dataArticle';
import Button from '../../../components/button/Button';

import './AdminArticle.css'
import { PageProps } from '../../../types/interface/page/Page';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Search from '../../../components/search/Search';

const AdminArticle: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	const navigate = useNavigate();

	const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
	const [showModalDetail, setShowModalDetail] = useState<boolean>(false);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
				<div className="content-top-menu-action">
					<Button
						name="+ Tambah Postingan"
						onClick={() => navigate('/psikolog/schedule')}
						style={{ borderRadius: 30 }}
					/>
				</div>
			</div>
			<div className="admin__content--body">
				<div className="admin__article--content-wrapper">
					<Table
						theadData={theadData}
						tbodyData={tbodyData}
						actionColumn
						action1={{
							name: 'Edit artikel',
							color: 'primary',
							icon: 'icon-edit',
							onClick: () => setShowModalConfirm(true),
						}}
						action2={{
							name: 'Hapus',
							color: 'danger',
							icon: 'icon-delete',
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

export default AdminArticle;
