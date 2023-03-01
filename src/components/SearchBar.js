import React from "react";
// Passing in state props from parents to child
const SearchBar = ({
  searchText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <input
        type="text"
        // Pass the state variable to the searchInput
        value={searchText}
        placeholder="Search..."
        // Add onChange event handler and using the state setter function to set the Seachinput::Until you do this,React wont respond to changes on the input.
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          // Pass the state variable to the CheckInput
          checked={inStockOnly}
          // Add onChange event handler and using the state setter function to set the Checkinput
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
