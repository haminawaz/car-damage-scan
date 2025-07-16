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

      <section className="py-10 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-4">
              Optimised Vehicle Inspections
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8">
              Fully automatic - Powered by AI
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto mb-8">
            <div className="rounded-lg p-8 lg:p-16">
              <Image
                src="/images/hero.png"
                alt="Vehicle Inspection"
                className="w-full h-auto rounded-lg"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
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

      {/* Video Section */}
      <section className="w-full flex item-center justify-center py-12 md:py-16 px-3 md:px-12">
        <Image
          src="/images/video-sec.png"
          alt="video section"
          className="w-full h-auto rounded-lg"
          width={200}
          height={200}
          priority
        />
      </section>

      <AiDamageSection />

      <IndustriesSection />

      <Footer />
    </div>
  );
}
