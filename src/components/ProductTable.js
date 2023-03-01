import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = ({ products, searchText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }

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
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    // //////////////////////////////
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
