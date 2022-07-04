import React, { useState } from 'react'
import ConsultationContext from '../../../context/ConsultationAdmin.context';
import { Consultation, Psikolog } from '../../../types';
import Button from '../../button/Button';
import Modal from '../Modal';

interface ModalConsultationProps {
    show: boolean
    onClose: () => void
    onOK: () => void
	type: string
	psikolog: Psikolog[]
	loading?: boolean
	detailConsul?: Consultation
}

const ModalConsultation: React.FC<ModalConsultationProps> = ({
	show,
	onClose,
	onOK,
	type,
	psikolog,
	loading,
	detailConsul
}) => {
	const dataCategory = ['Pendidikan', 'Pekerjaan', 'Cinta', 'Keluarga']
	
	return (
		<ConsultationContext.Consumer>
			{
				value => {
					return (
						<Modal show={show} onClose={onClose}>
							<div className="admin__consul--modal-add-wrapper">
								<div className="form-input-group">
									<label htmlFor="psikolog-name">
										Nama Psikolog
									</label>
									<select
										name="question-category"
										id="psikolog-name"
										onChange={(e) =>
											value.setPsikolog(detailConsul? detailConsul.psikolog._id : e.target.value)
										}
									>
										<option>Pilih psikolog</option>
										{psikolog.length ? (
											psikolog.map((item) => (
												<option
													key={item._id}
													value={item._id}
													selected={detailConsul && detailConsul?.psikolog._id === item._id}
												>
													{item.name}
												</option>
											))
										) : (
											<option>
												Data tidak ditemukan.
											</option>
										)}
									</select>
								</div>
								<div className="form-input-group">
									<label htmlFor="question-category">
										Kategori
									</label>
									<select
										name="question-category"
										id="question-category"
										value={value.category}
										onChange={(e) =>
											value.setCategory(e.target.value)
										}
									>
										<option>Pilih kategori</option>
										{
											dataCategory.map((item, index) => (
												<option key={index} value={item} selected={detailConsul && detailConsul?.category === item}>
													{item}
												</option>
											))
										}
									</select>
								</div>

								<div
									className="modal-confirmation__button-wrapper"
									style={{
										width: '100%',
										justifyContent: 'center',
										marginTop: 50,
									}}
								>
									<Button
										name="Batalkan"
										color="secondary"
										onClick={onClose}
										style={{ width: '100%' }}
									/>
									<Button
										name={
											type === 'add'
												? 'Simpan'
												: type === 'edit'
												? 'Update'
												: ''
										}
										color="primary"
										onClick={onOK}
										style={{ width: '100%' }}
										loading={loading}
									/>
								</div>
							</div>
						</Modal>
					);
				}
			}
			
		</ConsultationContext.Consumer>
	);
};

export default ModalConsultation