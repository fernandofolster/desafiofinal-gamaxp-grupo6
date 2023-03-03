import { FilterCategoryBtn } from "./styled";
import React, { useState, useEffect } from "react";
import SutiaPreto from "../../assets/images/lingerie-preta.jpg";

export function FilterCategoryArea() {
  const products = [
    {
      nome: "Produto 1",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 1,
      preco: 5,
    },
    {
      nome: "Produto 1",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 2,
      preco: 5,
    },
    {
      nome: "Produto 1",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 3,
      preco: 5,
    },
  ];

 const [data, setData] = useState(products);
  const filterResult = (catItem) => {
    const result = products.filter((curData) => {
      return curData.categoria === catItem;
    });
    setData(result);
  };

  return (
    <FilterCategoryBtn>
      <div className="category-filter-wrapper">
        {data.map((value) => {
          const {categoria} = value;
          return (
            <div key={categoria}>
              <button className="category-filter-btn" onClick={() => filterResult(categoria)}>
                1
              </button>
              <button className="category-filter-btn" onClick={() => filterResult(categoria)}>
                2
              </button>
              <button className="category-filter-btn" onClick={() => filterResult(categoria)}>
                3
              </button>
              <button className="category-filter-btn" onClick={() => setData(products)}>
                All
              </button>
           
            </div>
          );
        })}
      </div>
    </FilterCategoryBtn>
  );

}
