import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './layout/mainlayout'
import Home from './page/home'
import Add from './page/add'
import Wish from './page/wish'
import Basket from './page/basket'
import Detail from './page/detail'
import { WishProvider } from './context/useWishContext'
import { BasketProvider } from './context/useBasketContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <WishProvider>
          <BasketProvider>


            <Routes>
              <Route element={<MainLayout></MainLayout>} path='/'>
                <Route element={<Home></Home>} index></Route>
                <Route element={<Add></Add>} path='/add'></Route>
                <Route element={<Wish></Wish>} path='/wish'></Route>
                <Route element={<Basket></Basket>} path='/basket'></Route>
                <Route element={<Detail></Detail>} path='/detaul/:id'></Route>
              </Route>

            </Routes>
          </BasketProvider>
        </WishProvider>
      </BrowserRouter>
    </>
  )
}

export default App
