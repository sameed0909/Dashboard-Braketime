import axios from 'axios';
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const axiosInstance = axios.create({
  baseURL: 'https://bt-swagger.360xpertsolutions.com/v1/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODVjZjBlMDAtYzk4Ni00YjlkLTk3YzItZTQwZjI5ZWVhZmViIiwidXNlcl9uYW1lIjoibXVoYW1tYWQgc2hhaGFiIiwicm9sZSI6InN0b3JlIG1hbmFnZXIiLCJ3b3JrcGxhY2VfaWQiOiJkZTJlYzA1NS01MDUzLTRjOTQtYWZmMC1kOWJjMDQxZTYzMjciLCJ3b3JrcGxhY2VfdHlwZSI6InN0b3JlIiwid29ya3BsYWNlX25hbWUiOiJzdG9yZSBvbmUiLCJpYXQiOjE3Mjc4NTA2NDksImV4cCI6MTcyNzkzNzA0OX0.KxR8kKf_PENPS8CMlbLQ81qnN81VtRAc_zq2LCqzZpo`,
  },
});

export const fetchOrdersByStatus = createAsyncThunk(
  'overview/fetchOrdersByStatus',
  async (status, { getState }) => {
    const { currentPage, ordersPerPage } = getState().overview;  // Use current page for status
    const response = await axiosInstance.get(`store-orders?status=${status}&page=${currentPage}&pageSize=${ordersPerPage}`);
    const ordersData = response.data.data;
    const totalOrders = response.data.meta_data.totalCount;
    return { data: ordersData, total: totalOrders };
  }
);

const initialState = {
  selectedOrder: null,
  orders: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalOrders: 0,
  ordersPerPage: 5,
  currentstatus: '',
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
    setcurrentstatus(state, action) {
      state.currentstatus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchOrders.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(fetchOrders.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.orders = action.payload.data;
      //   state.totalOrders = action.payload.total;
      // })
      // .addCase(fetchOrders.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
      .addCase(fetchOrdersByStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersByStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.data;
        state.totalOrders = action.payload.total;
      })
      .addCase(fetchOrdersByStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedOrder, setCurrentPage ,setcurrentstatus } = overviewSlice.actions;
export default overviewSlice.reducer;
