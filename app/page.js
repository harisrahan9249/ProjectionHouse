'use client';

import Header from "./components/Header";
import Banner from "./components/Banner";
import Legacy from './components/Legacy';
import Sectors from './components/Sectors';
import AvItServices from './components/AvItServices';
import OurSolutions from './components/OurSolutions';
import Footer from "./components/Footer";
import ContactSection from './components/ContactSection';
import Partners from './components/Partners';

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white text-gray-900">
      <Header />
      <Banner />
      <Legacy/>
      <Sectors/>
      <AvItServices/>
      <OurSolutions/>
      <Partners/>
      <ContactSection/>
      <Footer/>
      
    </div>
  );
}
