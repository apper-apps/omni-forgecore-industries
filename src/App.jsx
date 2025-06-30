import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/organisms/Layout'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Products from '@/components/pages/Products'
import ProductDetail from '@/components/pages/ProductDetail'
import ProductionCapabilities from '@/components/pages/ProductionCapabilities'
import QualityStandards from '@/components/pages/QualityStandards'
import Contact from '@/components/pages/Contact'
import RequestQuote from '@/components/pages/RequestQuote'

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/capabilities" element={<ProductionCapabilities />} />
            <Route path="/quality" element={<QualityStandards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<RequestQuote />} />
          </Routes>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  )
}

export default App