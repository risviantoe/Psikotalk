import React, { useState } from 'react';
import { BsPeopleFill } from 'react-icons/all';
import { useOutletContext } from 'react-router-dom';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import Table from '../../../components/table/Table';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/clientData';

import './AdminClient.css';

const AdminClient: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon)

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

export default AdminClient;
