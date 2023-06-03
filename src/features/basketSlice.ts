import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            /** Redux Toolkit allows us to write "mutating" login in reducers. It
             * doesn't actually mutate the state because it uses the Immer library,
             * which detectsw changes to a "draft state" and produces a brand new
             * immutable state based off those changes
             */
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            // ** find the index in the array of the id that been passed
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            // ** create new copy of basket
            let newBasket = [...state.items];

            // ** if the index is existing in the array remove one
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as its not in basket!`
                );
            }

            // ** replace the basket with the new copy
            state.items = newBasket;
        },
    },
});

// ** Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// ** the "basket" name is base on the name in the store in reducer, the key that use there for the basketReducer
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
    state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal = (state) =>
    state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
