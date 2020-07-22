import { UPLOAD_SCOW, UPLOAD_ACC, UPLOAD_PRD } from '../type';

const initialState = {
    cattles : [],
    cattle : {},
    accessories : [],
    access : {},
    products : [],
    product : {},
    loading : false
};

export default function(state = initialState,action){
    switch (action.type) {
        case UPLOAD_SCOW:
            return {
                ...state,
                cattles : [
                    action.payload,
                    ...state.cattles
                ]
            }
        case UPLOAD_ACC : 
            return {
                ...state,
                accessories : [
                    action.payload,
                    ...state.accessories
                ]
            }
        case UPLOAD_PRD : 
            return {
                ...state,
                products : [
                    action.payload,
                    ...state.products
                ]
            }
        default:
            return state;
    }
}
