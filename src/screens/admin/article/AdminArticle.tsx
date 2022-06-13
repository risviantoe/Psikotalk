import React, { useState } from 'react';
import { FaNewspaper } from 'react-icons/allIcons';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Table from '../../../components/table/Table';
import { theadData, tbodyData } from '../dataDumy/dataArticle';
import { titleIconSize } from '../AdminConfig';
import Button from '../../../components/button/Button';

import './AdminArticle.css'

const AdminArticle = () => {
	const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
	const [showModalDetail, setShowModalDetail] = useState<boolean>(false);

	return (
		<React.Fragment>
			<div className="admin__content--title color-admin">
				<FaNewspaper size={titleIconSize} />
				<h1>Data Artikel</h1>
			</div>
			<div className="admin__content--body">
                <div className="admin__article--content-wrapper">
                    <div className="admin__article--button-add-article">
                        <Button
                            name="+ Tambah Artikel"
                        />
                    </div>
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
