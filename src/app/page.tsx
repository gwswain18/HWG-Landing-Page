import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import InsuranceTypes from "@/components/InsuranceTypes";
import QuoteCalculator from "@/components/QuoteCalculator";
import Testimonials from "@/components/Testimonials";
import Myths from "@/components/Myths";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Meet Carolyn */}
        <About />
        {/* 3. Coverage Options + CTA break */}
        <InsuranceTypes />
        {/* 4. Premium Calculator */}
        <QuoteCalculator />
       