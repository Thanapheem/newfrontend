import { UPLOAD_SCOW } from '../type';

const initialState = {
    cattles : [],
    cattle : {},
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
        default:
            return state;
    }
}
