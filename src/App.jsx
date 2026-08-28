import React from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/hero/Hero";
import SeatStrip from "./components/hero/SeatStrip";
import PackageSection from "./components/packages/PackageSection";
import RamadhanSection from "./components/ramadhan/RamadhanSection";
import FacilitySection from "./components/facility/FacilitySection";
import VideoLounge from "./components/video/VideoLounge";
import HajiSection from "./components/haji/HajiSection";
import VerificationSection from "./components/verification/VerificationSection";
import CityTourSection from "./components/tours/CityTourSection";
import GallerySection from "./components/gallery/GallerySection";
import TestimonialSection from "./components/testimonials/TestimonialSection";
import SavingSection from "./components/saving/SavingSection";
import ManagementSection from "./components/management/ManagementSection";
import CTASection from "./components/cta/CTASection";
import AgentContact from "./components/contact/AgentContact";
import DonationSection from "./components/donation/DonationSection";
import WhatsAppAgent from "./components/whatsapp/WhatsAppSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SeatStrip />
        <PackageSection />
        <RamadhanSection />
        <FacilitySection />
        <VideoLounge />
        <HajiSection />
        <VerificationSection />
        <ManagementSection />
        <TestimonialSection />
        <CityTourSection />
        <GallerySection />
        <SavingSection />
        <CTASection />
        <AgentContact />
        <WhatsAppAgent/>
      </main>
      <DonationSection />
      <Footer />
    </>
  );
}

export default App;
