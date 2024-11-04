import React from 'react';

const PhonemeList = ({ phonemes, onPhonemeClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4">
      {phonemes.map((phoneme, index) => (
        <button
          key={index}
          className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition duration-200 text-center"
          onClick={() => onPhonemeClick(phoneme)}
        >
          {phoneme}
        </button>
      ))}
    </div>
  );
};

export default PhonemeList;
