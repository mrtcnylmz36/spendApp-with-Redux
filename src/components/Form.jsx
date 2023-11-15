import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import {
  sell,
  buy,
  addBasket,
  deleteBasket,
} from "../redux/basketSlice/basketSlice";

function Form({ item }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);
  const buyItem = (price) => {
    dispatch(buy(price * inputValue));
    if (inputValue > 0) {
      dispatch(
        addBasket({
          id: item.id,
          title: item.title,
          price: item.price,
          count: inputValue,
        })
      );
    }
    setInputValue(0);
  };
  const sellItem = (price) => {
    dispatch(sell(price * inputValue));
    setInputValue(0);
    dispatch(
      deleteBasket({
        id: item.id,
        title: item.title,
        price: item.price,
        count: inputValue,
      })
    );
  };
  return (
    <div className="form">
      <Button
        value="Sell"
        id={inputValue > 0 ? "btn-red" : ""}
        onClick={() => sellItem(item.price)}
      />
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Button value="Buy" id="btn-green" onClick={() => buyItem(item.price)} />
    </div>
  );
}

export default Form;
