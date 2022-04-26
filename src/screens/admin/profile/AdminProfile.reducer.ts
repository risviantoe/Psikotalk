import React, { Reducer } from "react";

interface AdminProfileForm {
    fullname: string
    username: string
    gender: string
    email: string
    password: string
}

interface AdminProfileState {
    isSubmitted: boolean
    sending: boolean
    inputs: AdminProfileForm
}

type AdminProfileAction =
    | { name: 'SET_IS_SUBMITTED' }
    | { name: 'SET_SENDING', payload: boolean }
    | { name: 'SET_INPUTS', payload: Partial<AdminProfileForm> }

const reducer: Reducer<AdminProfileState, AdminProfileAction> = (state, action) => {
    switch (action.name) {
        case 'SET_SENDING':
            return {...state, sending: action.payload}
            break;

        case 'SET_IS_SUBMITTED':
            return {...state, isSubmitted: true}
            break;

        case 'SET_INPUTS':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    ...action.payload
                }
            }
            break;
    }

    return state
}

export default reducer