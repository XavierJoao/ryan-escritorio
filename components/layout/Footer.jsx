import React from 'react';
import Link from 'next/link';
import { getNoticias } from '@/lib/noticias';
import { formatarData } from '@/lib/helpers';
import { siteConfig, getEnderecoCompleto } from '@/config/site';

const Footer = () => {
  const latestNews = getNoticias().slice(0, 3);

  return (
    <footer className="bg-black-deep text-gold-champagne py-16 border-t border-gold-champagne">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Informações de Contato */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-champagne mb-6 font-montserrat-alternates">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold-champagne mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm leading-relaxed text-gray-medium">{getEnderecoCompleto()}</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold-champagne shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-medium">{siteConfig.contato.telefone}</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold-champagne shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <a href={`https://wa.me/${siteConfig.contato.whatsapp}`} className="text-sm text-gray-medium hover:text-gold-champagne transition-colors">
                  WhatsApp Profissional
                </a>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-champagne mb-6 font-montserrat-alternates">Expediente</h3>
            <ul className="space-y-3 text-sm text-gray-medium">
              <li className="flex justify-between border-b border-gold-champagne pb-2">
                <span>Seg — Sex</span>
                <span className="text-gold-champagne">08h - 18h</span>
              </li>
              <li className="flex justify-between border-b border-gold-champagne pb-2">
                <span>Sábado</span>
                <span className="text-gold-champagne">08h - 12h</span>
              </li>
              <li className="flex justify-between text-gray-medium">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

          {/* Últimas Notícias */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-champagne mb-6 font-montserrat-alternates">Insights</h3>
            <div className="space-y-4">
              {latestNews.map((noticia) => (
                <Link key={noticia.id} href={`/noticias/${noticia.slug}`} className="group block">
                  <p className="text-xs text-gray-medium mb-1 uppercase tracking-wider">{formatarData(noticia.date)}</p>
                  <p className="text-sm font-medium group-hover:text-gold-champagne transition-colors line-clamp-2 text-gray-medium">
                    {noticia.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Redes Sociais e Logo */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-champagne mb-6 font-montserrat-alternates">Conecte-se</h3>
            <div className="flex gap-3">
              {['linkedin', 'facebook', 'instagram'].map((rede) => (
                <a 
                  key={rede}
                  href={siteConfig.redesSociais[rede]} 
                  className="w-10 h-10 border border-gold-champagne rounded-full flex items-center justify-center hover:bg-gold-champagne hover:text-black-deep transition-all"
                >
                  <span className="sr-only">{rede}</span>
                  {/* Substitua aqui pelos ícones específicos se desejar */}
                  <div className="w-4 h-4 bg-current rounded-sm" /> 
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gold-champagne mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-medium">
            © 2024 {siteConfig.nome}. Excelência Jurídica.
          </p>
          <p className="text-sm text-gray-medium">
            Desenvolvido por João Vítor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;