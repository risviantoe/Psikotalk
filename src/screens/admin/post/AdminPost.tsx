import React, { useEffect, useState } from 'react';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Table from '../../../components/table/Table';
import { tbodyData } from '../dataDumy/dataArticle';
import Button from '../../../components/button/Button';
import ContentLoader from 'react-content-loader';
import './AdminPost.css';
import { PageProps } from '../../../types/interface/page/Page';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Search from '../../../components/search/Search';
import { postService } from '../../../services';
import { Post } from '../../../types';
import SekeletonTable from '../../../components/sekeletonLoading/SekeletonTable';

const AdminArticle: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	const [post, setPost] = useState<Array<Post>>();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const navigate = useNavigate();

	const getPost = async () => {
		setLoading(true);
		try {
			const res = await postService.postGet();
			setPost(res.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const theadData = ['Judul', 'Tanggal', 'Kategori', 'Penulis'];
	// const tbodyData = post
	// 	? post?.map((item, index) => ({
	// 			id: index,
	// 			items: [
	// 				// index + 1,
	// 				item.title,
	// 				item.createdAt,
	// 				item.category,
	// 				item.author,
	// 			],
	// 	  }))
	// 	: [];

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
		getPost();
	}, []);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
				<div className="content-top-menu-action">
					<Button
						name="+ Tambah Postingan"
						onClick={() => navigate('/admin/post/create')}
						style={{ borderRadius: 30 }}
					/>
				</div>
			</div>
			<div className="admin__content--body">
				<div className="admin__post--content-wrapper">
					{loading ? (
						<SekeletonTable />
					) : (
						<Table
							theadData={theadData}
							tbodyData={tbodyData}
							actionColumn
							action1={{
								name: 'Edit postingan',
								color: 'primary',
								icon: 'icon-edit',
								onClick: () => navigate('/admin/post/edit'),
							}}
							action2={{
								name: 'Hapus',
								color: 'danger',
								icon: 'icon-delete',
								onClick: () => setShowModal(true),
							}}
						/>
					)}
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

export default AdminArticle;
