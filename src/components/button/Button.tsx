import React, { ButtonHTMLAttributes } from 'react';
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
	buttonConfig?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
	color = 'primary',
	name,
	size = 'medium',
	type = 'normal',
	icon = '',
	iconSize = 30,
	style = {},
	onClick,
	loading,
	buttonConfig
}) => {
	return (
		<button
			className={`button ${color} ${size} ${type}`}
			style={style}
			type="button"
			onClick={onClick}
			{...buttonConfig}
		>
			{loading ? (
				<Loading />
			) : icon !== '' ? (
				<div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
					<i className={`icon ${icon}`} style={{ width: iconSize }} />{' '}
					{name}
				</div>
			) : (
				name
			)}
		</button>
	);
};

export default Button;
