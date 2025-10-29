import React from 'react'
import Hero from "./Hero";
import About from "./About";
import AvailabilityBanner from "./AvailabilityBanner";
import Services from "./Services";
import Work from "./Work";
import Notes from "./Notes";
import ServicesSection from "./ServicesSection";
import ClientsSection from "./ClientsSection";
import TestimonialSection from "./TestimonialSection";
import Profile from "./Profile";
import CardGrid from "./CardGrid";
import ContactCta from "./ContactCta";
import Footer from "./Footer";
import Bio from "./Bio";
import Milestone from "./Milestone";
import Studio from "./Studio";


const Homepage = () => {
  return (
    <>
    <Hero />
      <AvailabilityBanner />
      <About />
      <Services />
      <Work />
      <Notes />
      <ServicesSection />
      <ClientsSection />
      <TestimonialSection />
      <Profile />
      <CardGrid />
      <ContactCta />
      <Footer />
      
    </>
  )
}

export default Homepage
