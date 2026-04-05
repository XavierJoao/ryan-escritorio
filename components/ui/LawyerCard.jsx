import React from 'react';

const LawyerCard = ({ name, photo, formation, certifications }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={photo} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-center mb-4">{formation}</p>
      <ul className="text-sm text-gray-500">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-1">• {cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerCard;