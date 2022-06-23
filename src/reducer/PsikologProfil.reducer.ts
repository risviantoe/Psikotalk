import React, { Reducer } from 'react';
import { PsikologRequest, PsikologResponse } from '../types';
interface PsychologProfileState {
	isSubmitted: boolean;
	sending: boolean;
	inputs: PsikologRequest;
}

type PsychologProfileAction =
	| { name: 'SET_IS_SUBMITTED', payload: boolean }
	| { name: 'SET_SENDING'; payload: boolean }
	| { name: 'SET_INPUTS'; payload: Partial<PsikologRequest> };

const reducer: Reducer<PsychologProfileState, PsychologProfileAction> = (
	state,
	action
) => {
	switch (action.name) {
		case 'SET_SENDING':
			return { ...state, sending: action.payload };
			break;

		case 'SET_IS_SUBMITTED':
			return { ...state, isSubmitted: action.payload };
			break;

		case 'SET_INPUTS':
			return {
				...state,
				inputs: { ...state.inputs, ...action.payload },
			};
			break;
	}

	return state;
};

export default reducer;
