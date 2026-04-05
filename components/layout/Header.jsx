"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              <img
                src="/images/logo.png"
                alt={siteConfig.nome}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Home
            </Link>
            <Link href="/quem-somos" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Quem Somos
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Serviços
            </Link>
            <Link href="/noticias" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Notícias
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/quem-somos"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2"
              >
                Quem Somos
              </Link>
              <Link
                href="/servicos"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2"
              >
                Serviços
              </Link>
              <Link
                href="/noticias"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2"
              >
                Notícias
              </Link>
              <Link
                href="/contato"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2"
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;