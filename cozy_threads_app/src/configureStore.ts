import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  })
  return store
}

export default configureAppStore;
