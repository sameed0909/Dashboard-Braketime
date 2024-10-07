'use client'
import React from 'react'
import Cards from '@/app/component/Cards';
import Overview from '@/app/component/Overview';
import Sidebar from '@/app/component/sidebar';
import store from '../redux/store';
import { Provider } from 'react-redux';
import InventoryOverview from '../component/Inventoryoverview';
import Tickets from '../component/Tickets';
import Navbar from '../component/Navbar';

const Home = () => {
  return (
    <Provider store={store}>
      <div className='flex flex-row w-full'>
        <div> 
          <Sidebar />
        </div>
        <div className='flex flex-col w-full'>
          <Navbar />
          <div className='flex md:flex-row flex-col'>
            <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
              <Cards />
              <Overview />
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-900">
              <InventoryOverview />
              <Tickets />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default Home
