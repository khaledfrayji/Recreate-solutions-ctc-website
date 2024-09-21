import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import social media icons
import Image from "next/image";

export function Footer() {
  return (
    <BackgroundBeamsWithCollision>
      {/* Footer Section */}
      <footer
        className="bg-gradient-to-r from-[#03063e] to-[#05084f] py-8"
        id="contact"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          
          {/* Left Column: Contact Information */}
          <div className="mb-6 md:mb-0 md:w-1/2">
            <div className="mb-6">
              <h2 className="text-4xl text-white font-bold mb-2">À propos de nous</h2>
              <p className="text-white text-lg">
                Notre entreprise est composée de gens passionnés par le web et les
                technologies, voulant se dépasser tout en créant des solutions à
                vos besoins.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl text-white font-bold mb-2">Contact</h2>
              <p className="text-white">
                Courriel:{" "}
                <a
                  href="mailto:info@solutionsctc.com"
                  className="text-orange-500"
                >
                  info@solutionsctc.com
                </a>
              </p>
              <p className="text-white">
                Téléphone:{" "}
                <span className="text-orange-500">+1 (866) 552-2040</span>
              </p>
              <p className="text-white">
                Adresse:{" "}
                <span className="text-orange-500">
                  10355 Tolhurst, Montreal, QC H3L 3A4
                </span>
              </p>
              <a className="text-white" href="mailto:support@solutionsctc.com">
                support@solutionsctc.com
              </a>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2 text-white">Suivez-nous</h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    className="text-orange-500 hover:text-orange-600 transition"
                    size={24}
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    className="text-orange-500 hover:text-orange-600 transition"
                    size={24}
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    className="text-orange-500 hover:text-orange-600 transition"
                    size={24}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="text-orange-500 hover:text-orange-600 transition"
                    size={24}
                  />
                </a>
              </div>
            </div>
            <p className="text-white">&copy; 2024 Solutions CTC Inc</p>
          </div>

          {/* Right Column: Logo */}
          <div className="flex justify-center md:w-1/2 md:justify-end">
            <Image
              src="/logo.svg" 
              alt="Solutions CTC Logo"
              width={400}
              height={400}
              className="object-contain opacity-5"
            />
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  );
}
