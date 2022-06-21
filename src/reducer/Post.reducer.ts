import React, { Reducer } from 'react';

interface PostForm {
    title: string
    category: string
    body: React.ReactNode
}

interface PostState {
	isSubmitted: boolean;
	sending: boolean;
	inputs: PostForm;
}

type Action =
	| { name: 'SET_IS_SUBMITTED' }
	| { name: 'SET_SENDING'; payload: boolean }
	| { name: 'SET_INPUTS'; payload: Partial<PostForm> };

const PostReducer: Reducer<PostState, Action> = (state, action) => {
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
