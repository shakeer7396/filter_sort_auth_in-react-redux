import * as types from "./actionTypes"
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  switch(action.type){
    case types.GET_SHOES_DATA_REQUEST:
      return{
        ...state,
         isLoading:true,
         isError:false
      }
    case types.GET_SHOES_DATA_SUCCESS:
      return {
        ...state,
        isLoading:false,
        shoes:action.payload,
        isError:false
      }
    case types.GET_SHOES_DATA_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:true
      }
    default:
      return state
  }
  
};
