import React, { Component, Suspense } from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './styles/global.scss'
import Whatsapp from './components/common/Whatsapp';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Home = React.lazy(() => import('./pages/home'))
// const Blog = React.lazy(() => import('./pages/blog'))
const Team = React.lazy(() => import('./pages/team'))
const Packets = React.lazy(() => import('./pages/packets'))
const Mutation = React.lazy(() => import('./pages/changes'))
const Market = React.lazy(() => import('./pages/market'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Navbar />
          <Whatsapp />
          <Routes>
            <Route exact path="*" name="Home Page" element={<Home />} />
            {/* <Route exact path="blog" name="Blog Page" element={<Blog />} /> */}
            <Route exact path="team" name="Team Page" element={<Team />} />
            <Route exact path="packets" name="Paketler" element={<Packets />} />
            <Route exact path="mutation" name="Değişim" element={<Mutation />} />
            <Route exact path="market" name="Market" element={<Market />} />
          </Routes>
        </Suspense>
        <Footer />
      </HashRouter>
    )
  }
}

export default App