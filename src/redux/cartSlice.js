import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = ''; 

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/cart`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (item, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, item, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateCartItem = createAsyncThunk('cart/updateCartItem', async ({ itemId, quantity }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${API_URL}/cart/${itemId}`, { quantity }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteCartItem = createAsyncThunk('cart/deleteCartItem', async (itemId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${API_URL}/cart/${itemId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return itemId;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default cartSlice.reducer;
