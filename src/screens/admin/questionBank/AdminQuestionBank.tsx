import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import Table from '../../../components/table/Table';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/dataBankQuestion';

const AdminQuestionBank: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	})

	const navigate = useNavigate();

	const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
				<div className="content-top-menu-action">
					<Button
						name="+ Tambah Bank Soal"
						onClick={() => setShowModalAdd(true)}
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
							name: 'Edit bank soal',
							color: 'primary',
							icon: 'icon-edit',
							onClick: () =>
								navigate('/admin/bank-question/edit'),
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
					text="Apakah anda yakin ingin menghapus bank soal ini?"
					okButtonText="Hapus"
					onClose={() => setShowModalDelete(false)}
				/>
			</Modal>
			<Modal show={showModalAdd} onClose={() => setShowModalAdd(false)}>
				<div className="form-input-group">
					<label htmlFor="question-name">Nama Soal</label>
					<input
						type="text"
						name="question-name"
						id="question-name"
						placeholder="Masukkan nama soal"
					/>
				</div>
				<div className="form-input-group">
					<label htmlFor="question-category">Kategori</label>
					<select name="question-category" id="question-category">
						<option>Pilih kategori</option>
						<option value="psikotest">Psikotest</option>
					</select>
				</div>
				<div
					className="modal-confirmation__button-wrapper"
					style={{ width: '100%', justifyContent: 'center', marginTop: 50 }}
				>
					<Button
						name="Batalkan"
						color="secondary"
						onClick={() => setShowModalAdd(false)}
						style={{ width: '100%' }}
					/>
					<Button
						name="Simpan"
						color="primary"
						onClick={() => console.log('OK')}
						style={{ width: '100%' }}
					/>
				</div>
			</Modal>
		</React.Fragment>
	);
};

export default AdminQuestionBank;
