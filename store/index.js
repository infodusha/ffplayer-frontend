import { createContext } from 'react';

export const Context = createContext();

export const initialState = {
    burger: false,
};

export function reducer(state, action) {
    switch(action.type) {
        case 'TOGGLE_BURGER':
            return { ...state, burger: !state.burger };
        default:
            throw new Error('Undefined action type');
    }
}
