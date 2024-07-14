import React from 'react'
import Services from '../Services/Services'
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner'
import Banner from '../Banner/Banner'
import Information from '../Information/Information'
import TreatmentBanner from '../TreatmentBanner/TreatmentBanner'
import Testimonials from '../Testimonials/Testimonials'
import ContactUs from '../ContactUs/ContactUs'
import Navigation from '../../Shared/Navigation/Navigation'
import Docotrs from '../Doctors/Docotrs'

function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Information />
      <Services />
      <Docotrs />
      <TreatmentBanner />
      <AppoinmentBanner />
      <Testimonials />
      <ContactUs />
    </div>
  )
}

export default Home
