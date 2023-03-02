import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = ({ products, searchText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // This IF Statement is the searchbar and for filtering
    //".toLowerCase" This is converting the product name and the search input text the user types to lower case regardless if the user types uppercase letter
    // .indexOf---gives the index of the element in the array
    // So if the index of the searchText of the user is equal to -1(meaning its not there) return nothing
    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      // Return nothing
      return;
    }
    // This IF Statement is the Checkbox and for filtering
    if (inStockOnly && !product.stocked) {
      return;
    }
    // This IF STATEMENT is for the ProductRowCategory  and ProductRow components
    // If it is not NULL...push the product to the empty ROWS ARRAY
    if (product.category !== lastCategory) {
      // PUSHING THE SIX PRODUCTS INTO THE EMPTY 'ROW' ARRAY
      // console.log(
      //   rows.push(
      //     <ProductCategoryRow
      //       category={product.category}
      //       key={product.category}
      //     />
      //   )
      // );
      // PUSHING THE SIX PRODUCTS INTO THE EMPTY 'ROW' ARRAY
      rows.push(
        <ProductCategoryRow
          category={product.category}
          // Giving them a key which is an identifier of what category each product is
          key={product.category}
        />
      );
    }
    // PUSHING THE SIX PRODUCTS INTO THE EMPTY 'ROW' ARRAY
    rows.push(<ProductRow product={product} key={product.name} />);
    // console.log((lastCategory = product.category));
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
