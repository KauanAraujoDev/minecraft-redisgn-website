import React from 'react'

import LandingPage from '../components/Landing/Background'
import Header from '../components/Landing/Header'
import Login from '../components/Landing/Login'
import Footer from '../components/Landing/Footer'

export default function Landing() {
  return (
    <React.Fragment>
        <LandingPage />
        <Header />
        <Login />
        <Footer />
    </React.Fragment>
  )
}
