import React, { useState } from 'react';
import SearchIcon from "../assets/Search.png";
import Suggestion from '../Suggestion';
import "./Suggestions.css";

const Suggestions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Display suggestions only when the input is focused
    if (document.activeElement.classList.contains("search-input")) {
      const filteredSuggestions = Suggestion.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const clearSuggestions = () => {
    // Hide suggestions when the input loses focus
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        placeholder="What are you searching for?"
        className="search-input w-80 border focus:border-blue-500 focus:outline-5 outline-none px-4 py-2"
        onChange={handleSearchChange}
        onFocus={handleSearchChange} 
        onBlur={clearSuggestions}
      />

      <img
        src={SearchIcon}
        alt="Search Icon"
        className="search-icon"
      />

      {suggestions.length > 0 && (
        <div className="suggestions-box">
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="suggestion-item">
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Suggestions;

