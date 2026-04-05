import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import ServicesPreview from '@/components/sections/ServicesPreview';
import NewsPreview from '@/components/sections/NewsPreview';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <NewsPreview />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}