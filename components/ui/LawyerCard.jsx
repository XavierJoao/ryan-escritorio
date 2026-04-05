import React from 'react';

const LawyerCard = ({ name, photo, formation, certifications }) => {
  return (
    <div className="surface-card p-6">
      <img src={photo} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-slate-grey" />
      <h3 className="text-xl font-semibold text-center text-text-primary mb-2">{name}</h3>
      <p className="text-text-secondary text-center mb-4">{formation}</p>
      <ul className="text-sm text-text-secondary">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-1">• {cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerCard;