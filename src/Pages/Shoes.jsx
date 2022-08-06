import React from "react";
import Filter from "../Components/Filter";
import {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux";
import { getadata } from "../Redux/AppReducer/action";
import {Link} from "react-router-dom"
import ShoeCard from "../Components/ShoeCard";

const Shoes = () => {
  const shoesdata=useSelector((state)=>state.AppReducer.shoes)
  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(getadata())
  },[dispatch])
  console.log(shoesdata)
  return (
    <div style={{"display":"flex","justifyContent":"space-around"}}>
      <Filter  />
      <div style={{"display":"grid","gridTemplateColumns":"repeat(4,1fr)","gap":"10px"}}>
        {
          shoesdata?.map((item)=>(
           <Link to={`/shoes/${item.id}`}> <ShoeCard shoesdata={item} key={item.id}/></Link>
          ))
        }
      </div>
    </div>
  );
};

export default Shoes;
