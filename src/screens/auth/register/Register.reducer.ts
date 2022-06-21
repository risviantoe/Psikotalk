import React, { Reducer } from 'react';

interface RegisterForm {
	name: string;
	username: string;
	email: string;
	gender: string;
	password: string;
	confirmPassword: string
}

interface RegisterState {
	isSubmitted: boolean;
	sending: boolean;
	inputs: RegisterForm;
}

type RegisterAction =
	| { name: 'SET_IS_SUBMITTED' }
	| { name: 'SET_SENDING'; payload: boolean }
	| { name: 'SET_INPUTS'; payload: Partial<RegisterForm> };

const reducer: Reducer<RegisterState, RegisterAction> = (state, action) => {
	switch (action.name) {
		case 'SET_SENDING':
			return { ...state, sending: action.payload };
			break;

		case 'SET_IS_SUBMITTED':
			return { ...state, isSubmitted: true };
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

export default reducer
