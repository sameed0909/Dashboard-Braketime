'use client'
import React from 'react'
import Cards from '@/app/component/Cards';
import Overview from '@/app/component/Overview';
import { Provider } from 'react-redux';
import store from './redux/store';
import Sidebar from '@/app/component/sidebar';
import InventoryOverview from './component/Inventoryoverview';

const page = () => {
  return (
    <Provider store={store}>
    <div className='flex'>
      <Sidebar/>
      <div className="flex-1 p-6 bg-gray-100">
      <Cards/>
      <Overview/>
      </div>
      <InventoryOverview/>
    </div>
    </Provider>
  )
}

export default page
