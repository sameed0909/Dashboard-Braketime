import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const axiosInstance = axios.create({
  baseURL: 'https://bt-swagger.360xpertsolutions.com/v1/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODVjZjBlMDAtYzk4Ni00YjlkLTk3YzItZTQwZjI5ZWVhZmViIiwidXNlcl9uYW1lIjoibXVoYW1tYWQgc2hhaGFiIiwicm9sZSI6InN0b3JlIG1hbmFnZXIiLCJ3b3JrcGxhY2VfaWQiOiJkZTJlYzA1NS01MDUzLTRjOTQtYWZmMC1kOWJjMDQxZTYzMjciLCJ3b3JrcGxhY2VfdHlwZSI6InN0b3JlIiwid29ya3BsYWNlX25hbWUiOiJzdG9yZSBvbmUiLCJpYXQiOjE3Mjc3NjE3NTAsImV4cCI6MTcyNzg0ODE1MH0.GDLp60fypiR1DW2HRq5Wrroatg8SOgKUXMnsJNIeGwk`,
  },
});

export const fetchOrders = createAsyncThunk('overview/fetchOrders', async ({ page, limit }) => {
  const response = await axiosInstance.get(`store-orders?_page=${page}&_limit=${limit}`);
  console.log(response.data);
  
  const ordersData = response.data.data;
  const totalOrders = response.data.meta_data.totalCount;
  
  return { data: ordersData, total: totalOrders };
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
