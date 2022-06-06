import React from 'react';

import {
	BsFillTelephoneFill,
	BsPeopleFill,
	MdEmail,
} from 'react-icons/allIcons';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/pagination/Pagination'

import './PsikologClient.css'

export const PsikologClient = () => {
	return (
		<React.Fragment>
			<div className="psikolog__content--title color-psikolog">
				<BsPeopleFill size={60} />
				<h1>Klien</h1>
			</div>
			<div className="psikolog__content--body">
				<div className="psikolog__list--wrapper">
					<div className="psikolog__list--item">
						<div className="psikolog__list--picture">
							<img
								src="/assets/images/profile05.jpg"
								alt="profile5"
							/>
						</div>
						<div className="psikolog__list--name">
							<span>Johnathan Alex</span>
						</div>
						<div className="psikolog__list--email">
							<span>johnathan_alex@email.com</span>
						</div>
						<div className="psikolog__list--gender">
							<span>Pria</span>
						</div>
						<div className="psikolog__list--actions">
							<Link to="">
								<MdEmail size={30} color="#00B29D" />
							</Link>
							<Link to="">
								<BsFillTelephoneFill
									size={25}
									color="#00B29D"
								/>
							</Link>
						</div>
					</div>
					<div className="psikolog__list--item">
						<div className="psikolog__list--picture">
							<img
								src="/assets/images/profile05.jpg"
								alt="profile5"
							/>
						</div>
						<div className="psikolog__list--name">
							<span>Johnathan Alex</span>
						</div>
						<div className="psikolog__list--email">
							<span>johnathan_alex@email.com</span>
						</div>
						<div className="psikolog__list--gender">
							<span>Pria</span>
						</div>
						<div className="psikolog__list--actions">
							<Link to="">
								<MdEmail size={30} color="#00B29D" />
							</Link>
							<Link to="">
								<BsFillTelephoneFill
									size={25}
									color="#00B29D"
								/>
							</Link>
						</div>
					</div>
					<div className="psikolog__list--item">
						<div className="psikolog__list--picture">
							<img
								src="/assets/images/profile05.jpg"
								alt="profile5"
							/>
						</div>
						<div className="psikolog__list--name">
							<span>Johnathan Alex</span>
						</div>
						<div className="psikolog__list--email">
							<span>johnathan_alex@email.com</span>
						</div>
						<div className="psikolog__list--gender">
							<span>Pria</span>
						</div>
						<div className="psikolog__list--actions">
							<Link to="">
								<MdEmail size={30} color="#00B29D" />
							</Link>
							<Link to="">
								<BsFillTelephoneFill
									size={25}
									color="#00B29D"
								/>
							</Link>
						</div>
					</div>
					<div className="psikolog__list--item">
						<div className="psikolog__list--picture">
							<img
								src="/assets/images/profile05.jpg"
								alt="profile5"
							/>
						</div>
						<div className="psikolog__list--name">
							<span>Johnathan Alex</span>
						</div>
						<div className="psikolog__list--email">
							<span>johnathan_alex@email.com</span>
						</div>
						<div className="psikolog__list--gender">
							<span>Pria</span>
						</div>
						<div className="psikolog__list--actions">
							<Link to="">
								<MdEmail size={30} color="#00B29D" />
							</Link>
							<Link to="">
								<BsFillTelephoneFill
									size={25}
									color="#00B29D"
								/>
							</Link>
						</div>
					</div>
				</div>
				<Pagination style={{ alignSelf: 'center' }} />
			</div>
		</React.Fragment>
	);
};

export default PsikologClient;
