import React, { Reducer } from "react"

interface PsychologProfileForm {
    fullname: string
    username: string
    gender: string
    email: string
    about: string
    birthDate: string
    phone: string
    study: string
    sipp: string
    password: string
}

interface PsychologProfileState {
    isSubmitted: boolean
    sending: boolean
    inputs: PsychologProfileForm
}

type PsychologProfileAction =
    | { name: 'SET_IS_SUBMITTED' }
    | { name: 'SET_SENDING', payload: boolean }
    | { name: 'SET_INPUTS', payload: Partial<PsychologProfileForm> }

const reducer: Reducer<PsychologProfileState, PsychologProfileAction> = (state, action) => {
    switch (action.name) {
        case 'SET_SENDING':
            return {...state, sending: action.payload}
            break

        case 'SET_IS_SUBMITTED':
            return {...state, isSubmitted: true}
            break

        case 'SET_INPUTS':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    ...action.payload
                }
            }
            break
    }

    return state
}

export default reducer