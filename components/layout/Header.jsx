"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const Header = () => {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#48525e', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Image
              src="/images/logo/logo-header00.png"
              alt="Logo Lopes Pinto Advogados"
              width={300}
              height={300}
              className="w-20 h-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex gap-16">
            <Link href="/" className="text-white hover:opacity-80 transition-fast font-medium uppercase tracking-wider text-sm">
              Home
            </Link>
            <Link href="/quem-somos" className="text-white hover:opacity-80 transition-fast font-medium uppercase tracking-wider text-sm">
              Quem Somos
            </Link>
            <Link href="/servicos" className="text-white hover:opacity-80 transition-fast font-medium uppercase tracking-wider text-sm">
              Serviços
            </Link>
            <Link href="/noticias" className="text-white hover:opacity-80 transition-fast font-medium uppercase tracking-wider text-sm">
              Notícias
            </Link>
            <Link href="/contato" className="text-white hover:opacity-80 transition-fast font-medium uppercase tracking-wider text-sm">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;