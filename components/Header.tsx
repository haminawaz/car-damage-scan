"use client";

import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky md:relative top-0 z-50 bg-background md:bg-none w-full flex justify-center pt-3">
      <header className="relative bg-header shadow top-0 z-50 rounded-xl w-11/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="logo"
                width={120}
                height={120}
                priority
              />
            </div>

            <div className="hflex items-center">
              <button
                className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #3CC0F0, #3C8FF5)",
                }}
              >
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
