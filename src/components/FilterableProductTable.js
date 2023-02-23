import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const FilterableProductTable = ({ products }) => {
  // State for the search bar input
  const [filterText, setFilterText] = useState("");
  // State for the checkbox input
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        // Passing the state variable as props
        searchText={filterText}
        inStockOnly={inStockOnly}
        // Passing the State setter functions as PROPS
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        inStockOnly={inStockOnly}
        searchText={filterText}
      />
    </div>
  );
};

export default FilterableProductTable;
