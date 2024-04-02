import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home/Home'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './Components/Contact/Contact.jsx'
import Layout from './Layout.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Testimonial from './Testimonial.jsx'
import About from './Components/About/About.jsx'
const router=createBrowserRouter(

   createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='portfolio' element={<Portfolio/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='about' element={<About></About>}></Route>
      </Route>
   )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
