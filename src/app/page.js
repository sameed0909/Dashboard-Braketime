'use client'
import React from 'react'
import Cards from '@/app/component/Cards';
import Overview from '@/app/component/Overview';
import { Provider } from 'react-redux';
import store from './redux/store';
import Sidebar from '@/app/component/sidebar';
import InventoryOverview from './component/Inventoryoverview';
import Tickets from './component/Tickets';
import Navbar from './component/Navbar';

const page = () => {
  return (
    <Provider store={store}>




      <div className='flex flex-row w-full'>

        <div>

          <Sidebar />
        </div>
        <div className='flex flex-col w-full'>
          <Navbar />

          <div className='flex flex-row'>

            <div className="flex-1 p-6 bg-gray-100  ">
              <Cards />
              <Overview />
            </div>
            <div className="p-6 bg-gray-100">
              <InventoryOverview />
              <Tickets />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default page
