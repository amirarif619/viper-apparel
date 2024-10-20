import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

export const fetchCart = createAsyncThunk('cart/fetchCart', async(_, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    try {
      const token = await user.getIdToken();
      const response = await axios.get('https://57e1fe74-02a5-4657-b006-2b227766f34f-00-hxfn748x47r1.pike.replit.dev/cart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
  return rejectWithValue('User is not authenticated');
});

export const addItem = createAsyncThunk('cart/addItem', async (item, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    try {
      const token = await user.getIdToken();
      const response = await axios.post('https://57e1fe74-02a5-4657-b006-2b227766f34f-00-hxfn748x47r1.pike.replit.dev/cart', item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
  return rejectWithValue('User is not authenticated');
});

export const removeItem = createAsyncThunk('cart/removeItem', async (id, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    try {
      const token = await user.getIdToken();
      const response = await axios.delete(`https://57e1fe74-02a5-4657-b006-2b227766f34f-00-hxfn748x47r1.pike.replit.dev/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
  return rejectWithValue('User is not authenticated');
});

export const updateItemQuantity = createAsyncThunk('cart/updateItemQuantity', async ({ id, quantity }, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    try {
      const token = await user.getIdToken();
      const response = await axios.put(`https://57e1fe74-02a5-4657-b006-2b227766f34f-00-hxfn748x47r1.pike.replit.dev/cart/${id}`, { quantity }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
  return rejectWithValue('User is not authenticated');
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
  }
},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCart.pending, (state) => {
    
      state.items = [];
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCart.fulfilled, (state, action) => {
      state.items = Array.isArray(action.payload) ? action.payload : [];
      state.loading = false;
    })
    .addCase(addItem.fulfilled, (state, action) => {
      console.log("Response from server after adding item:", action.payload);
      const existingItem = state.items.find(item => item.product_variant_id === action.payload.product_variant_id);
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      } else {
        state.items = [...state.items, action.payload];
        console.log("After adding item:", state.items);
      }
    })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.product_variant_id !== action.payload.product_variant_id);
      })
      .addCase(updateItemQuantity.fulfilled, (state, action) => {
        console.log('Payload received in fulfilled action:', action.payload);
      
        const updatedItem = action.payload.data; 
      
        
        const item = state.items.find(item => item.id === updatedItem.id);
      
        if (item) {
          
          item.quantity = updatedItem.quantity;
        }
      
        console.log('Updated item in Redux state:', state.items);
      });
  }
});

export default cartSlice.reducer;
export const { clearCart } = cartSlice.actions;