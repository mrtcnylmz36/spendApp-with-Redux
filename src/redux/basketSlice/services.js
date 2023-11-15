import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItem = createAsyncThunk("basket/getItem", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});
