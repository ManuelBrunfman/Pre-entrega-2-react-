import { Link } from "react-router-dom";

function CategoryList() {
  const categories = [
    { name: "Smartphones", path: "/category/smartphones" },
    { name: "Laptops", path: "/category/laptops" },
    { name: "Fragrances", path: "/category/fragrances" }
  ];

  return (
    <div>
      <h1>Categorías Disponibles</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.path}>
            <Link to={category.path}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;