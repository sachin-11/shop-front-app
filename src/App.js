import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <BrowserRouter>
          <Header />
          <main  className='py-3'>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
            </Routes>
          </Container>
          </main>

          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
