import React, { useState, useRef } from 'react';

interface InputCodeProps {
	length: number;
	loading: boolean;
	onComplete: any;
	value: number;
}

const InputCode: React.FC<InputCodeProps> = ({
	length,
	loading,
	onComplete,
	value,
}) => {
	const [code, setCode] = useState([...Array(length)].map(() => ''));
    const inputs = useRef<any>([]);

	const processInput = (e: any, slot: number) => {
		const num = e.target.value;
		if (/[^0-9]/.test(num)) return;
		const newCode = [...code];
		newCode[slot] = num;
		setCode(newCode);
		if (slot !== length - 1) {
			inputs.current[slot + 1].focus();
		}
		if (newCode.every((num) => num !== '')) {
			onComplete(newCode.join(''));
		}
	};

	const onKeyUp = (e: any, slot: number) => {
		if (e.keyCode === 8 && !code[slot] && slot !== 0) {
			const newCode = [...code];
			newCode[slot - 1] = '';
			setCode(newCode);
			inputs.current[slot - 1].focus();
		}
	};

	console.log(code);
	

	return (
		<React.Fragment>
			{code.map((num, idx) => {
				return (
					<input
						inputMode="numeric"
						type="number"
						name="verificationCode"
						className="auth-input-code"
						key={idx}
						maxLength={1}
						value={num}
						autoFocus={!code[0].length && idx === 0}
						readOnly={loading}
						onChange={(e) => processInput(e, idx)}
						onKeyUp={(e) => onKeyUp(e, idx)}
						ref={(ref) => inputs.current.push(ref)}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default InputCode;
