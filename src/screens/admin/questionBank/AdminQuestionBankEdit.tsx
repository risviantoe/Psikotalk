import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Table from '../../../components/table/Table';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/dataQuestion';

const AdminQuestionBankEdit: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	const navigate = useNavigate();

	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<h2>
					Soal Psikotes Lengkap (Spasial, aritmatika, dan Analog
					verbal)
				</h2>
				<div className="content-top-menu-action">
					<Button
						name="+ Tambah"
						onClick={() => navigate('/admin/bank-question/edit/question/create')}
						style={{ borderRadius: 30 }}
					/>
				</div>
			</div>
			<div className="admin__content--body">
				<div className="admin__post--content-wrapper">
					<Table
						theadData={theadData}
						tbodyData={tbodyData}
                        actionColumn
                        columnMaxWidth={700}
						action1={{
							name: 'Edit soal',
							color: 'primary',
							icon: 'icon-edit',
							onClick: () => navigate('/admin/bank-question/edit/question?=edit'),
						}}
						action2={{
							name: 'Hapus',
							color: 'danger',
							icon: 'icon-delete',
							onClick: () => setShowModal(true),
						}}
					/>
				</div>
			</div>
			<Modal show={showModal} closeButton={false}>
				<ModalConfirmation
					text="Apakah anda yakin ingin menghapus postingan?"
					okButtonText="Hapus"
					onClose={() => setShowModal(false)}
				/>
			</Modal>
		</React.Fragment>
	);
};

export default AdminQuestionBankEdit;
