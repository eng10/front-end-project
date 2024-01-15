import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import {Provider} from 'react-redux'
import Store from './redux/Store'
import {Toaster} from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={Store}>
   <App/>
   <Toaster/>
   </Provider>
  </React.StrictMode>
)
