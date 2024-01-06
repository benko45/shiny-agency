import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
  ThemeProvider,
  SurveyProvider,
} from './utils/context/ContextProvider.jsx'

import Home from './pages/Home/Home.jsx'
import Survey from './pages/Survey/Survey.jsx'
import Results from './pages/Results/Results.jsx'
import Freelances from './pages/Freelances/Freelances.jsx'
import Profile from './pages/Profile/Profile.jsx'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Error from './components/Error/Error.jsx'
// import ProfileContainer from './components/ProfileContainer/ProfileContainer.jsx'

import GlobalStyle from './utils/style/GlobalStyle.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
