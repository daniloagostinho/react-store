import { createSlice } from '@reduxjs/toolkit';

// Estado inicial do carrinho
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adiciona um produto ao carrinho
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove um produto do carrinho
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Exporta as actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Exporta o reducer
export default cartSlice.reducer;
