import { createSlice } from '@reduxjs/toolkit';
import { mockData } from './mockData';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: mockData,
    searchTerm: '',
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = productsSlice.actions;
export const selectProducts = (state) => {
  if (state.products.searchTerm) {
    return state.products.products.filter((product) =>
      product.title.toLowerCase().includes(state.products.searchTerm.toLowerCase())
    );
  }
  return state.products.products;
};
export default productsSlice.reducer;
