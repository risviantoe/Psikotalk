import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import ModalPsikolog from '../../../components/modal/modalPsikolog/ModalPsikolog';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import SekeletonTable from '../../../components/sekeletonLoading/SekeletonTable';
import Table from '../../../components/table/Table';
import Toast from '../../../components/toast/Toast';
import PsikologContext from '../../../context/PsikologAdmin.context';
import reducer from '../../../reducer/PsikologProfil.reducer';
import { adminService, psikologService } from '../../../services';
import { Psikolog, PsikologRequest, PsikologResponse } from '../../../types';
import { PageProps } from '../../../types/interface/page/Page';

import './AdminPsikolog.css';

const AdminPsikolog: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	const [loading, setLoading] = useState<boolean>(false);
	const [showToast, setShowToast] = useState<boolean>(false);
	const [toastMsg, setToastMsg] = useState<string>('');
	const [status, setStatus] = useState<string>('');
	const [psikolog, setPsikolog] = useState<Array<Psikolog>>([]);
	const [psikologId, setPsikologId] = useState<string>('');
	const [detailPsikolog, setDetailPsikolog] = useState<Psikolog>();
	const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
	const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
	const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

	const closeModalPsikolog = () => {
		setShowModalAdd(false);
		setShowModalUpdate(false);
		dispatch({ name: 'SET_IS_SUBMITTED', payload: false });
	};

	const getPsikolog = async () => {
		setLoading(true);
		try {
			const res = await psikologService.psikologGet();
			setPsikolog(res.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const onClickUpdate = async (id: string) => {
		setShowModalUpdate(true);
		setPsikologId(id);
		setLoading(true);
		try {
			let res = await psikologService.detailPsikologGet(id);
			setDetailPsikolog(res.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			name: '',
			username: '',
			email: '',
			gender: '',
			biodata: '',
			tanggal_lahir: '',
			nomor_hp: '',
			password: '',
			file_ijazah: '',
			surat_izin: '',
			images: '',
			jenjang_pendidikan: '',
		},
	});

	const { isSubmitted, inputs } = state;
	const {
		name,
		username,
		email,
		gender,
		biodata,
		tanggal_lahir,
		nomor_hp,
		password,
		file_ijazah,
		surat_izin,
		images,
		jenjang_pendidikan,
	} = inputs;

	const theadData = ['No.', 'Avatar', 'Nama', 'Email', 'Gender'];
	const tbodyData = psikolog
		? psikolog.map((item, index) => ({
				id: item._id,
				items: [
					index + 1,
					item.images && item.images?.length > 0 ? (
						item.images
					) : (
						<img
							className="table__avatar"
							src="/assets/images/profil01.png"
							alt="avatar"
						/>
					),
					<div className="table__column-name">{item.name}</div>,
					<div className="table__column-name">{item.email}</div>,
					item.gender,
				],
		  }))
		: [];

	const onSubmit = async (inputs: PsikologRequest) => {
		dispatch({ name: 'SET_IS_SUBMITTED', payload: true });
		console.log(inputs);

		if (
			!inputs.name ||
			!inputs.username ||
			!inputs.email ||
			!inputs.gender ||
			!inputs.biodata ||
			!inputs.tanggal_lahir ||
			!inputs.nomor_hp ||
			!inputs.password ||
			!inputs.file_ijazah ||
			!inputs.surat_izin ||
			!inputs.jenjang_pendidikan
			// !images
		)
			return;

		setLoading(true);

		try {
			const res = await adminService.psikologRegister(inputs);
			console.log('Response, ', res);
			setStatus('success');
			setLoading(false);
			setShowToast(true);
			setToastMsg('Psikolog berhasil ditambahkan');
			setShowModalAdd(false);
			setTimeout(() => {
				setShowToast(false);
			}, 5000);
			inputs.name = '';
			inputs.username = '';
			inputs.email = '';
			inputs.gender = '';
			inputs.biodata = '';
			inputs.tanggal_lahir = '';
			inputs.nomor_hp = '';
			inputs.password = '';
			inputs.file_ijazah = '';
			inputs.surat_izin = '';
			inputs.jenjang_pendidikan = '';
			dispatch({ name: 'SET_IS_SUBMITTED', payload: false });
		} catch (error) {
			console.log('Error, ', error);
			setLoading(false);
			setShowToast(true);
			setToastMsg('Psikolog gagal ditambahkan');
			setStatus('danger');
		}
		getPsikolog();
	};

	const onUpdate = async (inputs: PsikologRequest) => {
		dispatch({ name: 'SET_IS_SUBMITTED', payload: true });

		console.log('update', inputs);

		setLoading(true);

		try {
			const res = await psikologService.updatePsikolog(
				psikologId,
				inputs
			);
			console.log('Response, ', res);
			setStatus('success');
			setLoading(false);
			setShowToast(true);
			setToastMsg('Psikolog berhasil diupdate');
			setShowModalUpdate(false);
			setTimeout(() => {
				setShowToast(false);
			}, 3000);
			inputs.name = '';
			inputs.username = '';
			inputs.email = '';
			inputs.gender = '';
			inputs.biodata = '';
			inputs.tanggal_lahir = '';
			inputs.nomor_hp = '';
			inputs.password = '';
			inputs.file_ijazah = '';
			inputs.surat_izin = '';
			inputs.images = '';
			dispatch({ name: 'SET_IS_SUBMITTED', payload: false });
		} catch (error) {
			console.log('Error, ', error);
			setLoading(false);
			setShowToast(true);
			setToastMsg('Psikolog gagal diupdate');
			setStatus('danger');
		}
		getPsikolog();
	};

	const onClickDelete = (id: string) => {
		setShowModalConfirm(true);
		setPsikologId(id);
	};

	const onDelete = async () => {
		setLoading(true);

		try {
			let res = await psikologService.psikologDelete(psikologId);
			setLoading(false);
			setShowModalConfirm(false);
			getPsikolog();
		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		getPsikolog();
	}, []);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
				<div className="content-top-menu-action">
					<Button
						name="+ Tambah Psikolog"
						onClick={() => setShowModalAdd(true)}
						style={{ borderRadius: 30 }}
					/>
				</div>
			</div>
			<div className="admin__content--body">
				<div className="admin__client--content-wrapper">
					{loading ? (
						<SekeletonTable />
					) : (
						<Table
							theadData={theadData}
							tbodyData={tbodyData}
							actionColumn
							action1={{
								name: 'Edit',
								color: 'primary',
								icon: 'icon-edit',
								onClickUpdate: (e) => onClickUpdate(e),
							}}
							id={psikologId}
							action2={{
								name: 'Hapus',
								color: 'danger',
								icon: 'icon-delete',
								onClickUpdate: (e) => onClickDelete(e),
							}}
						/>
					)}
				</div>
			</div>
			<Modal show={showModalConfirm} closeButton={false}>
				<ModalConfirmation
					text="Anda yakin ingin menghapus data Psikolog?"
					okButtonText="Hapus"
					onClose={() => setShowModalConfirm(false)}
					onOk={onDelete}
					loading={loading}
				/>
			</Modal>
			<ModalPsikolog
				show={showModalAdd}
				onOK={onSubmit}
				onClose={closeModalPsikolog}
				loading={loading}
				type="add"
			/>
			<ModalPsikolog
				show={showModalUpdate}
				onOK={onUpdate}
				onClose={closeModalPsikolog}
				loading={loading}
				type="update"
				psikolog={detailPsikolog}
				id={psikologId}
			/>

			<Toast show={showToast} type={status} message={toastMsg} />
		</React.Fragment>
	);
};

export default AdminPsikolog;
