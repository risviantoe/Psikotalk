import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { PageProps } from '../../../types/interface/page/Page';

const AdminPriceCreate: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

    const navigate = useNavigate();

    const onSubmit = () => {

    }
    
	const [showModalBack, setShowModalBack] = useState<boolean>(false);
    const onBack = () => {
		setShowModalBack(true);
	};
	return (
		<React.Fragment>
			<div className="admin__content--body">
				<div className="admin__price--content-wrapper">
					<div className="form-input-group">
						<label htmlFor="price-name">Nama</label>
						<input type="text" id="price-name" name="price-name" />
					</div>
					<div className="form-input-group">
						<label htmlFor="price-value">Harga</label>
						<input
							type="text"
							id="price-value"
							name="price-value"
						/>
					</div>
					<div className="form-input-group">
						<label htmlFor="price-discount">Diskon</label>
						<div className="input-group">
							<input
								type="number"
								id="price-discount"
								name="price-discount"
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
						/>
					</div>
					<div className="question--action-wrapper">
						<Button
							name="Kembali"
							color="secondary"
							onClick={() => onBack()}
						/>
						<Button name="Simpan" onClick={() => onSubmit()} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AdminPriceCreate