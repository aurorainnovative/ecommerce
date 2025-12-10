import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from '../../App';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import CartPage from '../../pages/CartPage'
import ProductsPage from "../../pages/ProductsPage"

function MainLayout() {
    return (
        <Router>
            <Routes>
                <Route element={<App />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default MainLayout;