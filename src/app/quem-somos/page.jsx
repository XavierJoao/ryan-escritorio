import React from 'react';
import Header from '@/components/layout/Header';
import LawyerCard from '@/components/ui/LawyerCard';
import OfficeDescription from '@/components/sections/OfficeDescription';
import MissionVisionValues from '@/components/sections/MissionVisionValues';
import OfficePhoto from '@/components/sections/OfficePhoto';
import Footer from '@/components/layout/Footer';

export default function QuemSomos() {
  const lawyers = [
    {
      name: 'Dr. João Lopes',
      photo: '/images/equipe/joao-lopes.jpg',
      formation: 'Bacharel em Direito pela USP, Mestre em Direito Tributário pela PUC-SP',
      certifications: ['OAB-SP 123456', 'Especialista em Direito Tributário', 'Certificado em Contabilidade Jurídica']
    },
    {
      name: 'Dra. Maria Pinto',
      photo: '/images/equipe/maria-pinto.jpg',
      formation: 'Bacharel em Direito pela UNESP, Especialista em Direito Civil pela FGV',
      certifications: ['OAB-SP 654321', 'Especialista em Direito Civil', 'Certificado em Mediação de Conflitos']
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gunmetal">
      <Header />
      <OfficeDescription />
      <MissionVisionValues />

      {/* Seção dos Advogados */}
      <section className="py-16 bg-brand-gunmetal">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">
            Nossa Equipe
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {lawyers.map((lawyer, index) => (
              <LawyerCard
                key={index}
                name={lawyer.name}
                photo={lawyer.photo}
                formation={lawyer.formation}
                certifications={lawyer.certifications}
              />
            ))}
          </div>
        </div>
      </section>

      <OfficePhoto />
      <Footer />
    </div>
  );
}