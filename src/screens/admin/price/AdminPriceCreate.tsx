import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Toast from '../../../components/toast/Toast';
import { priceService } from '../../../services';
import { Price, PriceRequest } from '../../../types';
import { PageProps } from '../../../types/interface/page/Page';

const AdminPriceCreate: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	const [priceName, setPriceName] = useState<string>('');
	const [priceValue, setPriceValue] = useState<number>(0);
	const [priceDiscount, setPriceDiscount] = useState<number>(0);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [showToast, setShowToast] = useState<boolean>(false);
	const [toastMsg, setToastMsg] = useState<string>('');
	const [status, setStatus] = useState<string>('');

	let discount = (priceValue * priceDiscount) / 100;
	let priceAfterDiscount = priceValue - discount;
	const priceFix = priceAfterDiscount;

	const navigate = useNavigate();

	let { id } = useParams();
	console.log('param ', id);

	const formatRupiah = (value: any) => {
		return value
			.toString()
			.split('')
			.reverse()
			.join('')
			.match(/\d{1,3}/g)
			.join('.')
			.split('')
			.reverse()
			.join('');
	};

	const onSubmit = async () => {
		setIsSubmitted(true);
		setLoading(true);
		const data: PriceRequest = {
			opsi: priceName,
			normal_price: priceValue,
			discount: priceDiscount,
			fix_price: priceFix,
		};

		try {
			let res = await priceService.priceCreate(data);
			setLoading(false);
			setStatus('success');
			setShowToast(true);
			setToastMsg('Harga berhasil ditambahkan');
			setTimeout(() => {
				setShowToast(false)
				navigate('/admin/price');
			}, 5000);
		} catch (error) {
			console.log(error);
			setLoading(false)
			setStatus('danger');
			setShowToast(true);
			setToastMsg('Harga gagal ditambahkan');
			setTimeout(() => {
				setShowToast(false);
			}, 5000);
		}
	};

	const [showModalBack, setShowModalBack] = useState<boolean>(false);
	const onBack = () => {
		setShowModalBack(true);
		navigate('/admin/price');
	};
	return (
		<React.Fragment>
			<Toast type={status} message={toastMsg} show={showToast} />
			<div className="admin__content--body">
				<div className="admin__price--content-wrapper">
					<div className="form-input-group">
						<label htmlFor="price-name">Nama Paket</label>
						<input
							className={
								isSubmitted && !priceName ? 'form-error' : ''
							}
							type="text"
							id="price-name"
							name="price-name"
							placeholder="Masukkan nama paket harga"
							value={priceName}
							onChange={(e) => setPriceName(e.target.value)}
						/>
						<div className="form-error-message">
							{isSubmitted && !priceName ? (
								<span>Nama harga wajib diisi!</span>
							) : null}
						</div>
					</div>

					<div className="form-input-group">
						<label htmlFor="price-value">Harga</label>
						<input
							className={
								isSubmitted && !priceValue ? 'form-error' : ''
							}
							type="number"
							id="price-value"
							name="price-value"
							value={priceValue}
							onChange={(e) =>
								setPriceValue(e.target.valueAsNumber)
							}
						/>
						<div className="form-error-message">
							{isSubmitted && !priceValue ? (
								<span>Harga wajib diisi!</span>
							) : null}
						</div>
					</div>

					<div className="form-input-group">
						<label htmlFor="price-discount">Diskon</label>
						<div className="input-group">
							<input
								type="number"
								id="price-discount"
								name="price-discount"
								value={priceDiscount}
								onChange={(e) =>
									setPriceDiscount(e.target.valueAsNumber)
								}
							/>
							<div className="input-group-append">
								<span className="input-group-text">%</span>
							</div>
						</div>
					</div>
					<div className="form-input-group">
						<label htmlFor="price-afterdiscount">
							Harga setelah diskon
						</label>
						<input
							type="text"
							id="price-afterdiscount"
							name="price-afterdiscount"
							disabled
							value={'Rp. ' + formatRupiah(priceFix)}
						/>
					</div>
					<div className="question--action-wrapper">
						<Button
							name="Kembali"
							color="secondary"
							onClick={() => onBack()}
						/>
						<Button
							name="Simpan"
							onClick={() => onSubmit()}
							loading={loading}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AdminPriceCreate;
