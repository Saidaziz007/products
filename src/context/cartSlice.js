import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("carts", JSON.stringify(state.value));
      toast.success("Korzinaga qoshildi");
    },
    incCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value = state.value.map((product, inx) =>
        index === inx ? { ...product, quantity: product.quantity + 1 } : product
      );
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    decCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value = state.value.map((product, inx) =>
        index === inx ? { ...product, quantity: product.quantity - 1 } : product
      );
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    removeFromCart(state, action) {
      state.value = state.value.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("carts", JSON.stringify(state.value));
      toast.warning("Korzinadan ochirildi");
    },
    clearCart(state) {
      state.value = [];
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
  },
});

export const { addToCart, incCart, decCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
