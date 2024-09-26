import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk('overview/fetchOrders', async ({ page, limit }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  const data = await response.json();
  const total = response.headers.get('x-total-count');
  return { data, total };
});

const initialState = {
  selectedOrder: null,
  orders: [],
  loading: false,
  error: null,
  currentPage: 1, 
  totalOrders: 0,  
  ordersPerPage: 5,
};

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    setSelectedOrder(state, action) {
      state.selectedOrder = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.data;
        state.totalOrders = action.payload.total;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedOrder, setCurrentPage } = overviewSlice.actions;
export default overviewSlice.reducer;
