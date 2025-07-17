import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[url('/images/footer-bg.svg')] bg-cover bg-center text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center  pt-4 space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/footer-logo.svg"
                  alt="logo"
                  width={160}
                  height={160}
                  priority
                />
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Effortless car inspections
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <CiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <PiLinkedinLogoBold size={20} />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(to bottom, #3CC0F0, #3C8FF5)",
              }}
            >
              Contact
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 cardamagescan. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
