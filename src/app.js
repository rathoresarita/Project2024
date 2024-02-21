import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { CheckOut, HomePage, NavBar, ProductPage, SearchResult } from './Components'
const App = () => {
    return (
        <BrowserRouter>
        <NavBar></NavBar>
            <Routes>
                <Route exact path='/' element={<HomePage></HomePage>} />
                <Route exact path='/search' element={<SearchResult></SearchResult>} />
                <Route exact path='/product/:id' element={<ProductPage></ProductPage>} />
                <Route exact path='/checkout' element={<CheckOut></CheckOut>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
