import React from 'react';
import { Link } from 'react-router-dom';

import './Pagination.css'

interface PaginationProps {
    style?: {}
}

const Pagination: React.FC<PaginationProps> = ({
    style
}) => {
	return (
		<React.Fragment>
			<div className="pagination-wrapper" style={style}>
				<Link
					className="pagination-item pagination-corner-left pagination-disable"
					to="!#"
				>
					Prev
				</Link>
				<Link className="pagination-item pagination-active" to="!#">
					1
				</Link>
				<Link className="pagination-item" to="!#">
					2
				</Link>
				<Link className="pagination-item" to="!#">
					3
				</Link>
				<Link
					className="pagination-item pagination-corner-right"
					to="!#"
				>
					Next
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Pagination;
