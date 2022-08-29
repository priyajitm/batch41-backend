import React from 'react'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import ProductDetail from './components/ProductDetail'

const RouterMain = () => {
    return (
        <BrowserRouter>
            <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/detail' element={<ProductDetail />} />
            </Routes>
          
        </BrowserRouter>
        
    )
}

export default RouterMain