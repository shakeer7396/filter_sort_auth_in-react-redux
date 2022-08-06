//Create ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

export const getadata=(params)=>(dispatch)=>{
    dispatch({type:types.GET_SHOES_DATA_REQUEST});
  axios.get("http://localhost:8080/shoes",params)
  .then((res)=>{
        dispatch({type:types.GET_SHOES_DATA_SUCCESS,payload:res.data})
    }).then((er)=>{
        dispatch({type:types.GET_SHOES_DATA_FAILURE})
    })

}
