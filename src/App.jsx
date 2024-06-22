import SideBar from './Components/SideBar/SideBar'
import Header from './Components/Header/Header'
import { Route, Routes, useRoutes } from "react-router-dom";
import routes from './routes.js'
import Index from './Pages/Index/Index';
import Products from './Pages/Products/Products';
import Users from './Pages/Users/Users';
import { useState } from 'react';
import Register from './Pages/Register/Register';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import { Provider } from 'react-redux';
import store from './Redux/store';


function App() {

  const [isShowMenu, setIsShowMenu] = useState(false)

  // const router = useRoutes(routes)

  window.addEventListener('keydown', e => e.keyCode === 27 && setIsShowMenu(false))

  return (
    <Provider store={store}>
      <div className='flex bg-[#e6e8ed]'>
        <SideBar isShowMenu={isShowMenu} />
        <div className='flex-[4.5_4.5_0%] md:flex-[5_5_0%]'>
          <Header setIsShowMenu={setIsShowMenu} />
          {/* {router} */}
          <Routes>
            <Route path='/' element={<PrivetRoute><Index /></PrivetRoute>} />
            <Route path='/users' element={<PrivetRoute><Users /></PrivetRoute>} />
            <Route path='/products' element={<PrivetRoute><Products /></PrivetRoute>} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </Provider>
  )
}

export default App
