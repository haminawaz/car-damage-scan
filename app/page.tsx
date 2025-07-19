"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardSection from "@/components/CardSection";
import AiDamageSection from "@/components/AiDamageSection";
import IndustriesSection from "@/components/IndustriesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-10 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-4">
              Optimised Vehicle Inspections
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8">
              Fully automatic - Powered by AI
            </p>
          </div>
        </div>
      </section>
      <section className="relative max-w-full mx-auto">
        <div className="rounded-lg">
          <video
            className="w-full h-auto rounded-lg"
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="py-0 md:py-16 font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="bg-white text-xs uppercase px-10 py-1 rounded-full border-2 border-[#d47ffe]">
              benefits
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-8">
              Built for impact
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Turning every inspection into a competitive advantage
            </p>
          </div>
          <CardSection />
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-12 md:py-16 px-3 md:px-12">
        <div className="w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg">
          <video
            className="w-full h-full object-cover"
            preload="metadata"
            autoPlay
            loop
            muted
            controls
            playsInline
          >
            <source src="/videos/video-sec.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <AiDamageSection />

      <IndustriesSection />

      <Footer />
    </div>
  );
}
