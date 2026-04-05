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
    <header className="sticky top-0 z-10 bg-brand-charcoal-blue border-b border-slate-grey">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo/logo.png"
              alt="Logo Lopes Pinto Advogados"
              width={50}
              height={50}
            />
            <span className="text-[#957B4F] font-bold uppercase tracking-widest">Lopes Pinto Advogados</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm">
              Home
            </Link>
            <Link href="/quem-somos" className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm">
              Quem Somos
            </Link>
            <Link href="/servicos" className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm">
              Serviços
            </Link>
            <Link href="/noticias" className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm">
              Notícias
            </Link>
            <Link href="/contato" className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-secondary hover:text-brand-copper focus:outline-none transition-fast"
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
          <div className="md:hidden mt-8 pb-6 border-t border-brand-copper pt-6">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm"
              >
                Home
              </Link>
              <Link
                href="/quem-somos"
                onClick={closeMenu}
                className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm"
              >
                Quem Somos
              </Link>
              <Link
                href="/servicos"
                onClick={closeMenu}
                className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm"
              >
                Serviços
              </Link>
              <Link
                href="/noticias"
                onClick={closeMenu}
                className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm"
              >
                Notícias
              </Link>
              <Link
                href="/contato"
                onClick={closeMenu}
                className="text-text-secondary hover:text-brand-copper transition-fast font-semibold uppercase tracking-widest text-sm"
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