import React from 'react';
import { CgSearch } from 'react-icons/cg';

import './Search.css'

const Search = () => {
	return (
		<div className="search-wrapper">
			<div className="search">
				<CgSearch
					size={25}
					color="#006161"
					style={{
						position: 'absolute',
						top: '50%',
						transform: 'translateY(-50%)',
						left: 10,
						zIndex: 1
					}}
				/>
				<input
					type="text"
					placeholder="Cari ..."
					className="search-input"
				/>
			</div>
		</div>
	);
};

export default Search;
