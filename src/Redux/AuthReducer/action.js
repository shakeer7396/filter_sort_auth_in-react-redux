//Create ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios"


export const logindata=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data:{
            payload
        }

    }).then((res)=>{
        dispatch({type:types.LOGIN_SUCCESS,payload:res.data})
    }).catch((er)=>{
        dispatch({type:types.LOGIN_FAILURE})
    })

}