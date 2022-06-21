import React, { useState } from 'react';

import {
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from 'react-icons/all';

import './Accordion.css';

interface AccordionProps {
	title: string;
	content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<React.Fragment>
			<div className="accordion-item">
				<div
					className="accordion-title"
					onClick={() => setIsActive(!isActive)}
				>
					<span>{title}</span>
					{isActive ? (
						<MdKeyboardArrowUp size={30} color="#009595" />
					) : (
						<MdKeyboardArrowDown size={30} color="#009595" />
					)}
				</div>
				{isActive && <div className="accordion-content">{content}</div>}
			</div>
		</React.Fragment>
	);
};

export default Accordion;
