import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getItem } from "./services";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    basket: [],
    price: 1000000,
    modal: true,
    total: 0,
  },
  reducers: {
    buy: (state, action) => {
      state.price = Number(state.price) - Number(action.payload);
      state.price = state.price.toFixed(0);
    },
    sell: (state, action) => {
      state.price = Number(state.price) + Number(action.payload);
      state.price = state.price.toFixed(0);
    },
    addBasket: (state, action) => {
      const findItem = state.basket.find(
        (item) => item.title === action.payload.title
      );
      if (findItem) {
        findItem.count = Number(findItem.count) + Number(action.payload.count);
      } else {
        state.basket = [...state.basket, { ...action.payload }];
      }

      state.total = state.basket.reduce(
        (total, item) => total + Number(item.price) * Number(item.count),
        0
      );
    },
    deleteBasket: (state, action) => {
      const existingItem = state.basket.find(
        (basketItem) => basketItem.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.count === 1)
          state.basket = state.basket.filter(
            (item) => item.id !== action.payload.id
          );
        else if (existingItem.count > 0) existingItem.count--;
      }
      state.total = state.basket.reduce(
        (total, item) => total + Number(item.price) * Number(item.count),
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItem.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(getItem.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default basketSlice.reducer;

export const { buy, sell, addBasket, deleteBasket } = basketSlice.actions;
