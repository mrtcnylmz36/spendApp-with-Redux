import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBasket,
  addBasket,
  buy,
  sell,
} from "../redux/basketSlice/basketSlice";
import Button from "./Button";

function Receipt() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.basket.basket);
  const total = useSelector((state) => state.basket.total);

  function increase(itemName) {
    dispatch(buy(itemName.price));

    dispatch(
      addBasket({
        id: itemName.id,
        title: itemName.title,
        price: itemName.price,
        count: 1,
      })
    );
  }
  function decrease(itemName) {
    dispatch(sell(itemName.price));
    dispatch(
      deleteBasket({
        id: itemName.id,
        title: itemName.title,
        price: itemName.price,
        count: itemName.count - 1,
      })
    );
  }

  return (
    <div className="receipt">
      <h2 id="receipt">Your Receipt</h2>
      {item && (
        <table>
          <tr>
            <th>Product</th>
            <th>Piece</th>
            <th>Price</th>
          </tr>
          {item.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>
                <div>{item.count}</div>
                <div>
                  <Button
                    value={"+"}
                    id={"btn-red"}
                    onClick={() => increase(item)}
                  />
                  <Button
                    value={"-"}
                    id={"btn-green"}
                    onClick={() => decrease(item)}
                  />
                </div>
              </td>
              <td>${item.count * item.price}</td>
            </tr>
          ))}
          <tr>
            <td>TOTAL</td>
            <td colSpan={2}>${total}</td>
          </tr>
        </table>
      )}
    </div>
  );
}

export default Receipt;
