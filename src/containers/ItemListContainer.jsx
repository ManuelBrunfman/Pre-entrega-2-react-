import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function ItemListContainer({ saludo }) {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        let url = "https://dummyjson.com/products";

        if (id) {
          url = `https://dummyjson.com/products/category/${id}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        console.log("Categorías devueltas:", data.products.map((item) => item.category));
        let filteredItems = data.products;

        

        setItems(filteredItems);
      } catch (error) {
        console.error("Error al cargar los productos:", error.message);
        setItems([]); // En caso de error, lista vacía
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [id]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>{saludo}</h1>
      {items.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {items.map((item) => (
            <div key={item.id} style={{padding: "16px", borderRadius: "8px" }}>
              <img src={item.thumbnail} alt={item.title} style={{ width: "100px", height: "100px" }} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Precio: ${item.price}</p>
              <Link to={`/item/${item.id}`}>Ver detalles</Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
}

export default ItemListContainer;