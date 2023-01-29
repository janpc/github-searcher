import { configureStore } from '@reduxjs/toolkit'
import reposReducer from './repos/reposSlice';

const store = configureStore({
  reducer: {
    repos: reposReducer
  },
})

export default store;