import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
          state.totalQuantity = Math.max(0, state.totalQuantity - 1);
          state.totalPrice = Math.max(0, state.totalPrice - item.price);
        }
      }
    },

    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalQuantity = Math.max(0, state.totalQuantity - item.quantity);
        state.totalPrice = Math.max(0, state.totalPrice - item.price * item.quantity);
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
