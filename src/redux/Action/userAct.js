import {SET_USER,SET_ERRORS
        ,CLEAR_ERROR
        ,LOADING_UI
        ,LOADING_USER
        ,SET_UNAUTHENTICATED} from '../type'
import axios from 'axios'
export const loginuser = (userData,history) => (dispatch)=>{
    dispatch ({type : LOADING_UI});
    axios
    .post('/login',userData)
    .then((res)=>{
        setAuthorizationHeader(res.data.token)
        dispatch(getuser());
        dispatch({type : CLEAR_ERROR});
        history.push('/');
    })
    .catch(err=>{
       dispatch({
            type :SET_ERRORS,
            payload : err.response.data
        })
    })
}
export const getuser = ()=>(dispatch) =>{
    dispatch({type : LOADING_USER})
    axios
    .get('/user')
    .then((res)=>{
        dispatch({
            type : SET_USER,
            payload : res.data
        });
    })
    .catch((err)=> console.log(err));
}

export const sigupuser = (newUser,history) => (dispatch) =>{
    dispatch ({type : LOADING_UI});
    axios.post('/signup',newUser)
    .then(res=>{
        setAuthorizationHeader(res.data.token)
        dispatch(getuser());
        dispatch({type : CLEAR_ERROR});
        history.push('/');
    })
    .catch(err=>{
      dispatch({
        type : SET_ERRORS,
        payload :err.response.data
      })
    })
}
const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken',FBIdToken); 
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}

export const logout = () =>(dispatch) =>{
    localStorage.removeItem('FBIdToken')
    delete axios.defaults.headers.common['Authorization'];
    dispatch({type : SET_UNAUTHENTICATED});
}