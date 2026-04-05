"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <header className="sticky top-0 z-10 bg-black-deep border-b border-gold-champagne">
      <div className="container mx-auto px-6 md:px-12 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Image
              src="/images/logo/logo.png"
              alt="Logo Lopes Pinto Advogados"
              width={50}
              height={50}
              className="rounded-sm"
            />
            <span className="text-gold-champagne font-bold uppercase tracking-widest text-lg font-montserrat-alternates">Lopes Pinto Advogados</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link href="/" className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm">
              Home
            </Link>
            <Link href="/quem-somos" className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm">
              Quem Somos
            </Link>
            <Link href="/servicos" className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm">
              Serviços
            </Link>
            <Link href="/noticias" className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm">
              Notícias
            </Link>
            <Link href="/contato" className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white-pure hover:text-gold-champagne focus:outline-none transition-fast"
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
          <div className="md:hidden mt-6 pb-6 border-t border-gold-champagne pt-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm"
              >
                Home
              </Link>
              <Link
                href="/quem-somos"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm"
              >
                Quem Somos
              </Link>
              <Link
                href="/servicos"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm"
              >
                Serviços
              </Link>
              <Link
                href="/noticias"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm"
              >
                Notícias
              </Link>
              <Link
                href="/contato"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold-champagne transition-fast font-medium uppercase tracking-wider text-sm"
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