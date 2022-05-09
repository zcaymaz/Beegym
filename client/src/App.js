import React, { Component, Suspense } from 'react'
import {BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './styles/global.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Home = React.lazy(() => import('./pages/home'))
const Conctact = React.lazy(() => import('./pages/conctact'))
const Store = React.lazy(() => import('./pages/store'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
        <Navbar/>
          <Routes>
            {/* <Route exact path="/about" name="About Page" element={<About />} /> */}
            <Route exact path="*" name="Home Page" element={<Home />} />
            <Route exact path="conctact" name="Home Page" element={<Conctact />} />
            <Route exact path="store" name="Home Page" element={<Store/>} />
          </Routes>
        </Suspense>
        <Footer />
      </HashRouter>
    )
  }
}

export default App