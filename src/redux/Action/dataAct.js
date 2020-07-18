 import {   LOADING_UI, 
            UPLOAD_SCOW, 
            SET_ERRORS, 
            CLEAR_ERROR } 
    from '../type';
 import axios from 'axios'
 
 export const upCow = (newcow) => (dispatch) => {
     dispatch({ type : LOADING_UI});
     axios.post('/cattle',newcow)
     .then(res => {
        dispatch({
            type : UPLOAD_SCOW,
            payload : res.data
        });
        dispatch({type :CLEAR_ERROR})
     })
     .catch(err=>{
         dispatch ({
             type : SET_ERRORS,
             payload : err.response.data
         });
     });
 };