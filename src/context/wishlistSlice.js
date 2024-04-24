import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    toggleWishlist(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
        toast.success("Wishlistga qoshildi");
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
        toast.error("Wishlistdan olib tashlandi");
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
