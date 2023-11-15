import React, { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../redux/basketSlice/services";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Products() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.basket.status);
  const items = useSelector((state) => state.basket.items);
 
  React.useEffect(() => {
    if (status === "idle") {
      dispatch(getItem());
    }
    console.log(items);
  }, [dispatch, status]);

  return (
    <div className="product-container">
      {status === "loading" && (
        <ClipLoader
          color={"#333333"}
          loading={status === "loading" ? true : false}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {status === "succeeded" &&
        items.map((item) => <Product key={item.id} item={item} />)}
    </div>
  );
}

export default Products;
