import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import PhonemeList from '../components/PhonemeList';
import Popup from '../components/Popup';

const Dashboard = () => {
  const [phonemes, setPhonemes] = useState(['a', 'e', 'i', 'o', 'u']);
  const [filteredPhonemes, setFilteredPhonemes] = useState([]);
  const [selectedPhoneme, setSelectedPhoneme] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

  const handleSearch = (searchTerm) => {
    const filtered = phonemes.filter((phoneme) =>
      phoneme.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPhonemes(filtered);
  };

  const handlePhonemeClick = (phoneme) => {
    setSelectedPhoneme(phoneme);
    // Mock fetching words related to phoneme
    setSelectedWord('cat'); // Replace with actual API fetch
  };

  const handleClosePopup = () => {
    setSelectedWord(null);
  };

  return (
    <div className="p-4">
      <SearchBox onSearch={handleSearch} />
      <PhonemeList phonemes={filteredPhonemes.length > 0 ? filteredPhonemes : phonemes} onPhonemeClick={handlePhonemeClick} />
      {selectedWord && <Popup word={selectedWord} phoneme={selectedPhoneme} onClose={handleClosePopup} />}
    </div>
  );
};

export default Dashboard;
