import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsBasketFill } from "react-icons/bs";

function SubHeader() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.basket.price);
  return (
    <div className="sub-header">
      <h1>${price}</h1>
      <a className="icon" href="#receipt">
        <BsBasketFill />
      </a>
    </div>
  );
}

export default SubHeader;
