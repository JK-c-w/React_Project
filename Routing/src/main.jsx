import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Params from './Components/Params/Params.jsx';
import Git from './Components/Github/Git.jsx'
let router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {path:"",
    element:<Home/>},
    {path:"about",
    element:<About/>},
    {path:"contact",
    element:<Contact/>},
    {path:"prams/:name",
    element:<Params/>},
    {path:"git",
    element:<Git/>}
    ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
