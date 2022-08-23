import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import ModalConsultation from '../../../components/modal/modalConsultation/ModalConsultation';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Pagination from '../../../components/pagination/Pagination';
import Search from '../../../components/search/Search';
import SekeletonTable from '../../../components/sekeletonLoading/SekeletonTable';
import Table from '../../../components/table/Table';
import Toast from '../../../components/toast/Toast';
import ConsultationContext from '../../../context/ConsultationAdmin.context';
import { consultationService, psikologService } from '../../../services';
import { Consultation, ConsultationRequest, Psikolog } from '../../../types';
import { PageProps } from '../../../types/interface/page/Page';

const AdminConsultation: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	const navigate = useNavigate();
	const [consul, setConsul] = useState<Array<Consultation>>([]);
	const [psikolog, setPsikolog] = useState<Array<Psikolog>>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [typeModal, setTypeModal] = useState<string>('add');
	const [consulId, setConsulId] = useState<string>('');
	const [detailConsul, setDetailConsul] = useState<Consultation>();
	const [showToastError, setShowToastError] = useState<boolean>(false);
	const [toastMsg, setToastMsg] = useState<string>('');
	const [filter, setFilter] = useState<string>('');

	const getConsul = async () => {
		setLoading(true);
		try {
			const res = await consultationService.consultationGet();
			setConsul(res.data);
			setLoading(false);
		} catch (error: any) {
			console.log(error.response.statusText);
			setLoading(false);
			setShowToastError(true);
			setToastMsg(error.response.statusText);
			setTimeout(() => {
				setShowToastError(false);
			}, 5000);
		}
	};

	const getPsikolog = async () => {
		try {
			const res = await psikologService.psikologGet();
			setPsikolog(res.data);
		} catch (error: any) {
			console.log(error);
			setShowToastError(true);
			setToastMsg(error.response.statusText);
			setTimeout(() => {
				setShowToastError(false);
			}, 5000);
		}
	};

	const theadData = ['Nama', 'Kategori'];
	const tbodyData = consul
		? consul?.map((item, index) => ({
				id: item._id,
				items: [
					<div className="table__column-name">
						{item.psikolog ? item.psikolog.name : ''}
					</div>,
					item.category,
				],
		  }))
		: [];

	const [inPsikolog, setInPsikolog] = useState<string>('');
	const [inCategory, setInCategory] = useState<string>('');

	const onClickUpdate = async (id: string) => {
		setShowModal(true);
		setTypeModal('edit');
		setConsulId(id);
		setLoading(true);
		try {
			let res = await consultationService.consultationDetail(id);

			setDetailConsul(res.data);
			setInPsikolog(res.data.psikolog._id);
			setInCategory(res.data.category);
			setLoading(false);
		} catch (error: any) {
			console.log(error);
			setShowToastError(true);
			setToastMsg(error.response.statusText);
			setTimeout(() => {
				setShowToastError(false);
			}, 5000);
		}
	};

	const onClickDelete = (id: string) => {
		setShowModalDelete(true);
		setConsulId(id);
	};

	const onDelete = async () => {
		setLoading(true);

		try {
			let res = await consultationService.consultationDelete(consulId);
			setLoading(false);
			setShowModalDelete(false);
			getConsul();
		} catch (error: any) {
			console.log(error);
			setLoading(false);
			setShowToastError(true);
			setToastMsg(error.response.statusText);
			setTimeout(() => {
				setShowToastError(false);
			}, 5000);
		}
	};

	const onSubmit = async () => {
		setLoading(true);

		let data: ConsultationRequest = {
			psikolog: inPsikolog,
			category: inCategory,
			jadwal: new Date(),
		};

		try {
			let res = await consultationService.consultationPost(data);
			setLoading(false);
			setShowModal(false);
			getConsul();
		} catch (error: any) {
			console.log(error);
			setLoading(false);
			setShowToastError(true);
			setToastMsg(error.response.statusText);
			setTimeout(() => {
				setShowToastError(false);
			}, 5000);
		}
	};

	const onUpdate = async () => {
		setLoading(true);

		if (!inPsikolog || !inCategory) return setLoading(false);

		let data: ConsultationRequest = {
			psikolog: inPsikolog,
			category: inCategory,
			jadwal: new Date(),
		};

		try {
			let res = await consultationService.consultationUpdate(
				consulId,
				data
			);
			setLoading(false);
			setShowModal(false);
			getConsul();
		} catch (error: any) {
			console.log(error);
			setLoading(false);
			setShowToastError(true);
			setToastMsg(error.response.statusText);
			setTimeout(() => {
				setShowToastError(false);
			}, 5000);
		}
	};

	useEffect(() => {
		getConsul();
		getPsikolog();
	}, []);

	return (
		<ConsultationContext.Provider
			value={{
				psikolog: inPsikolog,
				category: inCategory,
				jadwal: new Date(),
				setPsikolog: setInPsikolog,
				setCategory: setInCategory,
			}}
		>
			<React.Fragment>
				<Toast show={showToastError} message={toastMsg} type="danger" />
				<div className="content-top-menu">
					<div style={{ display: 'flex', gap: 10, width: '80%' }}>
						<Search />
						<select name="category" id="category" onChange={(e) => setFilter(e.target.value)}>
							{/* <option>Filter Kategori</option> */}
							<option value="all">Semua</option>
							<option value="pendidikan">Pendidikan</option>
							<option value="pekerjaan">Pekerjaan</option>
							<option value="cinta">Cinta</option>
							<option value="keluarga">Keluarga</option>
						</select>
					</div>
					<div className="content-top-menu-action">
						<Button
							name="+ Tambah"
							onClick={() => {
								setShowModal(true);
								setTypeModal('add');
							}}
							style={{ borderRadius: 30 }}
						/>
					</div>
				</div>
				<div className="admin__content--body">
					<div className="admin__consul--content-wrapper">
						{loading ? (
							<SekeletonTable />
						) : (
							<Table
								theadData={theadData}
								tbodyData={tbodyData}
								actionColumn
								columnMaxWidth={500}
								action1={{
									name: 'Edit konsultasi',
									color: 'primary',
									icon: 'icon-edit',
									onClickUpdate: (e) => onClickUpdate(e),
								}}
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
				<Modal show={showModalDelete} closeButton={false}>
					<ModalConfirmation
						text="Apakah anda yakin ingin menghapus konsultasi ini?"
						okButtonText="Hapus"
						onClose={() => setShowModalDelete(false)}
						onOk={onDelete}
						loading={loading}
					/>
				</Modal>
				<ModalConsultation
					show={showModal}
					onClose={() => setShowModal(false)}
					onOK={typeModal === 'add' ? onSubmit : onUpdate}
					type={typeModal}
					psikolog={psikolog}
					loading={loading}
					detailConsul={detailConsul}
				/>
			</React.Fragment>
		</ConsultationContext.Provider>
	);
};

export default AdminConsultation;
