"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 bg-purple-700">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-1 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className=" mr-auto ml-4 p-0 hover:bg-black rounded transition-all"
            >
              <img
                alt="Logo"
                src="https://i.ibb.co/1qDxjd5/image.png"
                className="w-auto h-11"
              />
            </Link>
          </div>
          <div className="flex lg:hidden md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-12 text-white font-bold">
            <Link
              href="/"
              className="hover:text-black transition-all hidden md:flex"
            >
              Home
            </Link>
            <Link
              href="../Sections/About"
              className="hover:text-black transition-all hidden md:flex"
            >
              About
            </Link>
            <Link
              href="../Sections/Portfolio"
              className="hover:text-black transition-all hidden md:flex"
            >
              Portfolio
            </Link>
            <Link
              href="../Sections/Contact"
              className="hover:text-black transition-all hidden md:flex"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Custom Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-64 px-6 py-6 bg-purple-700 text-white font-bold transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="pr-1 hover:bg-black rounded transition-all"
            >
              <img
                alt="Logo"
                src="https://i.ibb.co/1qDxjd5/image.png"
                className="w-auto h-8"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6">
            <Link
              href="/"
              className="block py-2 hover:text-black transition-all"
            >
              Home
            </Link>
            <Link
              href="../Sections/About"
              className="block py-2 hover:text-black transition-all"
            >
              About
            </Link>
            <Link
              href="../Sections/Portfolio"
              className="block py-2 hover:text-black transition-all"
            >
              Portfolio
            </Link>
            <Link
              href="../Sections/Contact"
              className="block py-2 hover:text-black transition-all"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Overlay for sidebar (click outside to close) */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-gray-800 bg-opacity-75"
          />
        )}
      </header>
    </div>
  );
}
