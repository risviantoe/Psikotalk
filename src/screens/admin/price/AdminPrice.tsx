import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button'
import Modal from '../../../components/modal/Modal'
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation'
import Search from '../../../components/search/Search'
import Table from '../../../components/table/Table'
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/dataPrice';

const AdminPrice: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	const navigate = useNavigate();

	const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
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
					<Table
						theadData={theadData}
						tbodyData={tbodyData}
						actionColumn
						columnMaxWidth={500}
						action1={{
							name: 'Edit harga',
							color: 'primary',
							icon: 'icon-edit',
							onClick: () =>
								navigate('/admin/price/edit'),
						}}
						action2={{
							name: 'Hapus',
							color: 'danger',
							icon: 'icon-delete',
							onClick: () => setShowModalDelete(true),
						}}
					/>
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

export default AdminPrice