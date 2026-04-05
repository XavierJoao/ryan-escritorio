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
    <header className="bg-black-deep border-b border-gold-champagne">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu} className="text-white-pure hover:text-gold transition-fast">
              <span className="text-2xl font-bold text-gold">{siteConfig.nome}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link href="/" className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm">
              Home
            </Link>
            <Link href="/quem-somos" className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm">
              Quem Somos
            </Link>
            <Link href="/servicos" className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm">
              Serviços
            </Link>
            <Link href="/noticias" className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm">
              Notícias
            </Link>
            <Link href="/contato" className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white-pure hover:text-gold focus:outline-none transition-fast"
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
          <div className="md:hidden mt-8 pb-6 border-t border-gold-champagne pt-6">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm"
              >
                Home
              </Link>
              <Link
                href="/quem-somos"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm"
              >
                Quem Somos
              </Link>
              <Link
                href="/servicos"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm"
              >
                Serviços
              </Link>
              <Link
                href="/noticias"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm"
              >
                Notícias
              </Link>
              <Link
                href="/contato"
                onClick={closeMenu}
                className="text-white-pure hover:text-gold transition-fast font-medium uppercase tracking-wide text-sm"
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