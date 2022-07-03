import React, { Reducer } from 'react';

interface ConsulForm {
	title: string;
	category: string;
	body: React.ReactNode;
}

interface ConsulState {
	isSubmitted: boolean;
	sending: boolean;
	inputs: ConsulForm;
}

type Action =
	| { name: 'SET_IS_SUBMITTED' }
	| { name: 'SET_SENDING'; payload: boolean }
	| { name: 'SET_INPUTS'; payload: Partial<ConsulForm> };

const PostReducer: Reducer<ConsulState, Action> = (state, action) => {
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

export default PostReducer;
