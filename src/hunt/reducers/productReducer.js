import { productTypes } from "../types";

export const productReducer = (state = {}, action) => {

    switch (action.type) {
        case productTypes.selectedProduct:
            return {
                ...state,
                product: action.payload
            }

        default:
            return state;
    }
}


