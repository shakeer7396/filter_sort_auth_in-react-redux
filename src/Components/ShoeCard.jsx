import React from "react";

const ShoeCard = ({shoesdata}) => {
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} style={{"width":"80%","marginLeft":"20%","height":"300px",}}>
      <div>
        <img data-cy="shoe-card-image" src={shoesdata?.image} alt=""  style={{"width":"100%","height":"200px"}}/>
      </div>
      <div style={{"marginTop":"10%"}}>
        <div data-cy="shoe-name">{shoesdata.name}</div>
        <div data-cy="shoe-category">{shoesdata.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
