import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Category from './components/Category.jsx'
import Search from './components/Search.jsx'
import Login from './components/Login.jsx'
import Signin from './components/Signin.jsx'
import Information from './components/Information.jsx'

import { store } from './redux/store.js'
import { Provider } from 'react-redux'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"category",
//         element: <Category />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='category' element={<Category />} />
      <Route path='search' element={<Search />} />
      <Route path='signin' element={<Signin />} />
      <Route path='login' element={<Login />} />
      <Route path='info/:resid' element={<Information />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
