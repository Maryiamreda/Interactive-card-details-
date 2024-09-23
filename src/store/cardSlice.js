import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cardholderName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvc: '',
        validation: false,
    },
    reducers: {
        updateCardData: (state, action) => {
            return { ...state, ...action.payload };
        },
        setValidation: (state, action) => {
            state.validation = action.payload;
        },
    },
});

export const { updateCardData, setValidation } = cardSlice.actions;
export default cardSlice.reducer;