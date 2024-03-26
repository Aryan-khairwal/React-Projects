import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home, About, Contact } from './components/Index'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import User from './components/User'
import GitInfo, { gitInfoLoader } from './components/GitInfo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='user/:userId' element={<User />} />
      <Route
        loader={gitInfoLoader}
        path='github' element={<GitInfo />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
