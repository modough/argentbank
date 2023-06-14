import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import authSliceReducer from './features/authSliceReducer'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { PersistGate } from 'redux-persist/integration/react'



const reducers = combineReducers({
  userReducer: authSliceReducer
});
const persistConfig = {
  key: 'root',
  storage,
  maxAge: 0 * 0 * 60,
};
const persistedReducer = persistReducer(persistConfig, reducers);

//STORE -> GLOBALIZED STATE here 
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
