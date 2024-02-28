import React, { useEffect, useState } from "react";
import "./ProductFilter.scss";
import axios from "axios";
import { getFilterQuery } from "../getquery/getFilterQuery";
export default function ProductFilter({ setFilterQuery }) {
  const [categories, setCategories] = useState([]);
  const [categoryInp, setCategoryInp] = useState({
    q: "",
    category: "",
    price_gte: "",
    price_lte: "",
  });
  useEffect(() => {
    axios("http://localhost:3000/categories").then((data) => {
      setCategories(data.data);
    });
  }, []);

  function changInp(e) {
    setCategoryInp({ ...categoryInp, [e.target.name]: e.target.value });
  }

  function filterProduct(e) {
    e.preventDefault();
    const query = getFilterQuery(categoryInp);
    setFilterQuery(query);
  }

  return (
    <div className="d-flex gap-3 mb-4">
      <form action="" className="d-flex gap-3" onSubmit={filterProduct}>
        <input
          className="filter__input"
          type="text"
          name="q"
          placeholder="...Search"
          onChange={changInp}
          value={categoryInp.q}
        />

        <select
          className="filter__input"
          onChange={changInp}
          name="category"
          value={categoryInp.category}
        >
          <option>Choose And Option</option>
          {categories.map((category) => {
            return (
              <option
                key={`categories-product-${category.id}`}
                value={category.name}
              >
                {category.name}
              </option>
            );
          })}
        </select>

        <input
          className="filter__input"
          type="text"
          placeholder="max Price"
          name="price_gte"
          value={categoryInp.price_gte}
          onChange={changInp}
        />

        <input
          className="filter__input"
          type="text"
          placeholder="min Price"
          onChange={changInp}
          value={categoryInp.price_lte}
          name="price_lte"
        />
      </form>

      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={filterProduct}>
          Filter
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setFilterQuery("");
            setCategoryInp({
              q: "",
              category: "",
              price_gte: "",
              price_lte: "",
            });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
