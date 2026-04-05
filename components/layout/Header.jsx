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
    <header className="bg-dark-primary border-b border-gold-accent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu} className="text-text-secondary hover:text-gold-accent transition-fast">
              <span className="office-name text-2xl">{siteConfig.nome}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link href="/" className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm">
              Home
            </Link>
            <Link href="/quem-somos" className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm">
              Quem Somos
            </Link>
            <Link href="/servicos" className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm">
              Serviços
            </Link>
            <Link href="/noticias" className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm">
              Notícias
            </Link>
            <Link href="/contato" className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-secondary hover:text-gold-accent focus:outline-none transition-fast"
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
          <div className="md:hidden mt-8 pb-6 border-t border-gold-accent pt-6">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm"
              >
                Home
              </Link>
              <Link
                href="/quem-somos"
                onClick={closeMenu}
                className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm"
              >
                Quem Somos
              </Link>
              <Link
                href="/servicos"
                onClick={closeMenu}
                className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm"
              >
                Serviços
              </Link>
              <Link
                href="/noticias"
                onClick={closeMenu}
                className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm"
              >
                Notícias
              </Link>
              <Link
                href="/contato"
                onClick={closeMenu}
                className="text-text-secondary hover:text-gold-accent transition-fast font-medium uppercase tracking-widest text-sm"
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