import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'

import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx'
import Results from './pages/Results/index.jsx'
import Freelances from './pages/Freelances/index.jsx'

import Header from './components/Header/index.jsx'
import Error from './components/Error/index.jsx'
import ClientForm from './components/ClientForm/index.jsx'
import FreelanceForm from './components/FreelanceForm/index.jsx'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/survey/:questionNumber" element={<Survey />} /> */}
            <Route path="/survey" element={<Survey />} />
              { /* Nous imbriquons nos composants dans survey */}
              <Route path="/survey/client" element={<ClientForm />} />
              <Route path="/survey/freelance" element={<FreelanceForm />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
