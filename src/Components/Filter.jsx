import React from "react";
import {useState} from "react"
import {useSearchParams} from "react-router-dom"
import {useEffect} from "react"
import { useDispatch } from "react-redux";
import { getadata } from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
   const [Searchparams,SetSearchparams]=useSearchParams()
  const [category,Setcategory]=useState(Searchparams.getAll("category")||[]);
 const dispatch=useDispatch();
 const [singledata,SetSingle]=useState({});


  useEffect(()=>{
    
      SetSearchparams({category:category})
      let categoryparams={
            params:{
            category:Searchparams.getAll("category")
            }
      }
      dispatch(getadata(categoryparams))


  },[category,Searchparams,dispatch,SetSearchparams])

console.log(category)
  const handleCheckBox=(e)=>{
    const point=e.target.value;
      let newList=[...category];
      if(category.includes(point)){
        newList.splice(newList.indexOf(point),1)
      }
      else{
        newList.push(point)
      }
    Setcategory(newList)
  }
   

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox"  onChange={handleCheckBox} value="Sneakers" defaultChecked={category.includes("Sneakers")}/>
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox"  onChange={handleCheckBox} value="Loafers" defaultChecked={category.includes("Loafers")}/>
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox"  onChange={handleCheckBox} value="Canvas" defaultChecked={category.includes("Canvas")}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox"  onChange={handleCheckBox} value="Boots" defaultChecked={category.includes("Boots")}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
