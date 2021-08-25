import React from "react";

import "./search-box.styles.css";

// SearchBox can just be a functional component (as opposed to a class)
// since it only takes in props and returns html/jsx. It does not need
// state or access to any lifecycle functions.
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
