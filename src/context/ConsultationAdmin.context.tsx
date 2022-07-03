import React, { useState } from 'react';
import { ConsultationRequest } from '../types';

interface ConsultationContextProvInterface extends ConsultationRequest {
	children?: React.ReactNode;
	setPsikolog: (newPsikolog: string) => void;
	setCategory: (newCategory: string) => void;
}

const defaultValue: ConsultationContextProvInterface = {
	psikolog: '',
	category: '',
	jadwal: new Date(),
	setPsikolog: (newPsikolog: string) => null,
	setCategory: (newCategory: string) => null,
};

const ConsultationContext = React.createContext(defaultValue);
const ConsultationContextProv: React.FC<ConsultationContextProvInterface> = (
	props
) => {
	const [psikolog, setPsikolog] = useState<string>('');
	const [category, setCategory] = useState<string>('');
	return (
		<ConsultationContext.Provider
			value={{
				psikolog: psikolog,
				category: category,
				setPsikolog: setPsikolog,
				setCategory: setCategory,
				jadwal: new Date(),
			}}
		>
			{props.children}
		</ConsultationContext.Provider>
	);
};

export default ConsultationContext;
