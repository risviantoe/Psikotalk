import React, { Reducer } from 'react';
import { LoginRequest as LoginForm } from '../../../types';

interface LoginState {
	isSubmitted: boolean;
	sending: boolean;
	inputs: LoginForm;
}

type Action =
	| { name: 'SET_IS_SUBMITTED' }
	| { name: 'SET_SENDING'; payload: boolean }
	| { name: 'SET_INPUTS'; payload: Partial<LoginForm> };

const LoginReducer: Reducer<LoginState, Action> = (state, action) => {
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

export default LoginReducer;
