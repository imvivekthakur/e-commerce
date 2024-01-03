import React, { useState } from "react";
import SearchIcon from "../assets/Search.png";
import SuggestionList from "../Suggestion";
import "./Suggestions.css";
import { useNavigate } from "react-router-dom";

const Suggestions = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Display suggestions only when the input is focused
    if (document.activeElement.classList.contains("search-input")) {
      const filteredSuggestions = SuggestionList.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionsClick = (event) => {
    const clickedSuggestion = event.target.textContent;
    setSearchQuery(clickedSuggestion);
    setSuggestions([]);
    const formattedSuggestion = clickedSuggestion.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${formattedSuggestion}`)
  };

  const clearSuggestions = () => {
    // Hide suggestions when the input loses focus
    setSuggestions([]);
  };

  const handleNav = () => {
    navigate("/product");
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        placeholder="What are you searching for?"
        className="search-input w-60 md:w-80 border focus:border-blue-500 focus:outline-5 outline-none px-2 py-1 md:px-4 md:py-2"
        onChange={handleSearchChange}
        onFocus={handleSearchChange}
        onBlur={clearSuggestions}
      />

      <img
        src={SearchIcon}
        alt="Search Icon"
        className="search-icon"
        onClick={handleNav}
      />

      {suggestions.length > 0 && (
        <div className="suggestions-box" onMouseDown={handleSuggestionsClick}>
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
