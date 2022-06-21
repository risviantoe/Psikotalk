import React from 'react';

import {
	BsFillTelephoneFill,
	BsPeopleFill,
	MdEmail,
} from 'react-icons/all';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Pagination from '../../../components/pagination/Pagination'
import Search from '../../../components/search/Search';
import { PageProps } from '../../../types/interface/page/Page';

import './PsikologClient.css'

export const PsikologClient: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
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
