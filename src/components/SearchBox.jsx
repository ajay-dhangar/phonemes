import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center border-b-2 border-gray-300 py-2 px-4">
      <FaSearch className="mr-3 text-gray-500" />
      <input
        type="text"
        placeholder="Search phonemes..."
        className="outline-none flex-grow placeholder-gray-500 p-2 py-1 rounded-lg"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;