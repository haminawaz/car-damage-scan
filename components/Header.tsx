"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <div className="w-full flex justify-center pt-3">
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

            <nav className="hidden md:flex space-x-8">
              {["Home", "Solutions", "Markets", "About", "Stories"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            <div className="hidden md:flex items-center">
              <button
                className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #3CC0F0, #3C8FF5)",
                }}
              >
                Book a demo
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-full left-0 right-0 bg-background shadow-md rounded-xl md:hidden overflow-hidden transform transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen
              ? "max-h-[500px] opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            {["Home", "Solutions", "Markets", "About", "Stories"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base rounded-lg font-medium text-gray-600 hover:bg-[#e2e6ee] hover:text-gray-900"
                >
                  {item}
                </a>
              )
            )}
            <div className="px-3 py-2">
              <button
                className="w-full text-white px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                onClick={() => setIsMenuOpen(false)}
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
