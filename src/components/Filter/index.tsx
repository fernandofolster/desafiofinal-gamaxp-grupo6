import { FilterCategoryBtn } from "./styled";

export function FilterCategoryArea() {
  const filter = [
    {
        categoria: "id",
    },

    {
        categoria: "id",
    },

    {
        categoria: "id",
    },

    {
        categoria: "id",
    },

    {
        categoria: "id",
    },
  ];

  return (
    <FilterCategoryBtn>
      <div className="category-filter-wrapper">
        {filter.map((filter) => (
          <div className="category-filter" key={filter.categoria}>
            <div>
              <button className="category-filter-btn" type="button">
                <div>{filter.categoria}</div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </FilterCategoryBtn>
  );
}
