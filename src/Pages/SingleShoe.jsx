import React,{useState} from "react";
import {useParams} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import {useEffect} from "react"
import { getadata } from "../Redux/AppReducer/action";


const SingleShoe = () => {
  let {id}=useParams();
  const shoesdata=useSelector((state)=>state.AppReducer.shoes)
  const dispatch=useDispatch()
  const [singledata,Setsingledata]=useState({})

  useEffect(()=>{
    if(shoesdata?.length==0){
       dispatch(getadata())
    }
  })

  useEffect(()=>{
    if(id){
      let data=shoesdata.find(item=>item.id===Number(id));
        data&&Setsingledata(data);
    }
  },[shoesdata,id])
  console.log(singledata)


  return (
    <div>
      <h2>{singledata.name}</h2>
      <div>
        <img src={singledata.image} alt="Cover Pic"  />
      </div>
      <div>
        <div>{singledata.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
