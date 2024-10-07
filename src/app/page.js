'use client'
import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';
import Page from '@/app/login/page';

const page = () => {
  return (
    <Provider store={store}>
      <Page/>
    </Provider>
  )
}

export default page
