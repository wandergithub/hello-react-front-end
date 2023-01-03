import { configureStore } from '@reduxjs/toolkit'
import reducer from './config';

export default configureStore({
  reducer
})