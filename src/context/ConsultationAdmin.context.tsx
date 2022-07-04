import React, { useState } from 'react';
import { ConsultationRequest } from '../types';

interface ConsultationContextProvInterface extends ConsultationRequest {
	children?: React.ReactNode;
	detailConsulPsikolog?: string;
	detailConsulCategory?: string;
	setDetailConsulPsikolog?: (newDetailConsulPsikolog: string) => void;
	setDetailConsulCategory?: (newDetailConsulCategory: string) => void;
	setPsikolog: (newPsikolog: string) => void;
	setCategory: (newCategory: string) => void;
}

const defaultValue: ConsultationContextProvInterface = {
	psikolog: '',
	category: '',
	jadwal: new Date(),
	detailConsulPsikolog: '',
	detailConsulCategory: '',
	setDetailConsulPsikolog: (newDetailConsulPsikolog: string) => null,
	setDetailConsulCategory: (newDetailConsulCategory: string) => null,
	setPsikolog: (newPsikolog: string) => null,
	setCategory: (newCategory: string) => null,
};

const ConsultationContext = React.createContext(defaultValue);
const ConsultationContextProv: React.FC<ConsultationContextProvInterface> = (
	props
) => {
	const [psikolog, setPsikolog] = useState<string>('');
	const [category, setCategory] = useState<string>('');
	const [detailConsulPsikolog, setDetailConsulPsikolog] =
		useState<string>('');
	const [detailConsulCategory, setDetailConsulCategory] =
		useState<string>('');
	return (
		<ConsultationContext.Provider
			value={{
				psikolog: psikolog,
				category: category,
				setPsikolog: setPsikolog,
				setCategory: setCategory,
				jadwal: new Date(),
				detailConsulPsikolog: detailConsulPsikolog,
				detailConsulCategory: detailConsulPsikolog,
				setDetailConsulPsikolog: setDetailConsulPsikolog,
				setDetailConsulCategory: setDetailConsulCategory
			}}
		>
			{props.children}
		</ConsultationContext.Provider>
	);
};

export default ConsultationContext;
