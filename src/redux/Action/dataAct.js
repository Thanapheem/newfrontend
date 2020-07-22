 import {   LOADING_UI, 
            UPLOAD_SCOW, 
            SET_ERRORS, 
            CLEAR_ERROR,
            UPLOAD_ACC, 
            UPLOAD_PRD} 
    from '../type';
 import axios from 'axios'
 
 //อัพโหลดขายโคมีชีวิต
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
 //upload สินค้าเบ็ดเตล็ด
 export const UpACC = (newAcc) => (dispatch) =>{
     dispatch({type : LOADING_UI});
     axios.post ('/uploadaccessories',newAcc)
     .then(res=>{
         dispatch ({
             type : UPLOAD_ACC,
             payload : res.data
         });
         dispatch({type :CLEAR_ERROR});
     })
     .catch(err=>{
        dispatch ({
            type : SET_ERRORS,
            payload : err.response.data
        });
    });
 }

 //upload ผลิตภัณฑ์จากโค
export const UpPRD = (newPrd) => (dispatch) => {
    dispatch ({type :  LOADING_UI})
    axios.post('/uploadproduct',newPrd)
    .then (res=>{
        dispatch({
            type : UPLOAD_PRD,
            payload : res.data
        });
        dispatch ({type : CLEAR_ERROR});
    })
    .catch (err=>{
        dispatch({
            type : SET_ERRORS,
            payload : err.response.data
        })
    })
}