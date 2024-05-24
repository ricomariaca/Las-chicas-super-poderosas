import {followTypes} from "../types"
 
export const followReducer = (state = {}, action) => {
 
    switch (action.type) {
        case followTypes.saveReview:
            return {
                ...state,
                review: state.review.push(action.payload)
            }
        default:
            return state;
    }
}