import React, { useState } from 'react';
import { BsPeopleFill } from 'react-icons/allIcons';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Table from '../../../components/table/Table';
import { titleIconSize } from '../AdminConfig';
import { theadData, tbodyData } from '../dataDumy/clientData';

import './AdminPsikolog.css';

const AdminPsikolog = () => {
    const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);

	return (
		<React.Fragment>
			<div className="admin__content--title color-admin">
				<BsPeopleFill size={titleIconSize} />
				<h1>Data Psikolog</h1>
			</div>
			<div className="admin__content--body">
				<div className="admin__client--content-wrapper">
					<Table
						theadData={theadData}
						tbodyData={tbodyData}
						actionColumn
						action1={{
							name: 'Hapus',
							color: 'danger',
							icon: 'icon-delete',
							onClick: () => setShowModalConfirm(true),
						}}
					/>
				</div>
			</div>
			<Modal show={showModalConfirm} closeButton={false}>
				<ModalConfirmation
					text="Anda yakin ingin menghapus data Klien?"
					okButtonText="Hapus"
					onClose={() => setShowModalConfirm(false)}
				/>
			</Modal>
		</React.Fragment>
	);
};

export default AdminPsikolog;
