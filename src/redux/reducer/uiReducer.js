import {  SET_ERRORS, CLEAR_ERROR, LOADING_UI } from '../type'

const inittiailState =  {
    loading : false,
    errors : null
};

export default function(state = inittiailState,action){
    switch(action.type){
        case SET_ERRORS:
            return{
                ...state,
                loading :false,
                errors :action.payload
            };
        case CLEAR_ERROR : 
            return{
                ...state,
                loading :false,
                errors : null
            }
        case LOADING_UI :
            return{
                ...state,
                loading : true

            }
        default : 
            return state;
    }
}