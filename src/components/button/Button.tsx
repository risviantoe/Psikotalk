import React from 'react';
import { Loading } from '../loading/Loading';
import './Button.css';

interface ButtonProps {
	name?: string;
	color?: string;
	size?: string;
	type?: string;
	icon?: string;
	iconSize?: number;
	style?: {};
	onClick?: () => void;
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	color = 'primary',
	name = 'Button',
	size = 'medium',
	type = 'normal',
	icon = '',
	iconSize = 30,
	style = {},
	onClick,
	loading
}) => {
	return (
		<button
			className={`button ${color} ${size} ${type}`}
			style={style}
			type="button"
			onClick={onClick}
		>
			{
				loading ? (
					<Loading />
				) : (
					icon !== '' ? (
						<i className={`icon ${icon}`} style={{ width: iconSize }} />
					) : (
						name
					)
				)
			}
		</button>
	);
};

export default Button;
