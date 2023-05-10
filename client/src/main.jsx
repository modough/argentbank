import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes'






//ACTION on actions folder


// REDUCER on reducer folder


//STORE -> GLOBALIZED STATE here 




//DISPATCH on the components



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)
