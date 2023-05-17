import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import authSliceReducer from './features/authSliceReducer'






//ACTION on actions folder


// REDUCER on reducer folder


//STORE -> GLOBALIZED STATE here 
const store = configureStore({
  reducer: {
    userReducer: authSliceReducer
  }
})



//DISPATCH on the components



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
)
