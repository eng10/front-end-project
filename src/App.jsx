import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from './Router/Router'
export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
