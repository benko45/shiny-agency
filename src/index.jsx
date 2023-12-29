import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import { ThemeProvider } from './utils/context/index.jsx'

import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx'
import Results from './pages/Results/index.jsx'
import Freelances from './pages/Freelances/index.jsx'

import Header from './components/Header/index.jsx'
import Footer from './components/Footer/Footer.jsx'
import Error from './components/Error/Error.jsx'

import GlobalStyle from './utils/style/GlobalStyle.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
