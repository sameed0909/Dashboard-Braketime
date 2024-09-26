'use client'
import React from 'react'
import Cards from '@/app/component/Cards';
import Overview from '@/app/component/Overview';
import { Provider } from 'react-redux';
import store from './redux/store';

const page = () => {
  return (
    <Provider store={store}>
    <div>
      <Cards/>
      <Overview/>
    </div>
    </Provider>
  )
}

export default page
