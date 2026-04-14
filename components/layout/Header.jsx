"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const Header = () => {
  // Classe padrão dos links
  const navLinkClass =
    "text-white hover:text-[#b8892b] transition-all duration-300 font-medium uppercase tracking-wider text-xs";

  // Lista de links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/servicos", label: "Serviços" },
    { href: "/noticias", label: "Notícias" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: '#48525e',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex items-center gap-12">
          
          {/* Logo */}
          <div className="flex items-center">
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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;