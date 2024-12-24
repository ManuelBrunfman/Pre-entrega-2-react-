// ItemDetailContainer.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contador, setContador] = useState(0);

  const incremento = () => {
    setContador(() => (contador+1));
  };

  const sustraccion = () => {
    if (contador > 0 )
    setContador(() => (contador-1));
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error al cargar el producto:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div style={{ width: "100%" }}>
      {item ? (
        <div style={{ padding: "16px", maxWidth: "300px", margin: "0 auto", textAlign: "center" }}>
          <img src={item.thumbnail} alt={item.title} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", margin: "10px 0" }}>
            <button onClick={sustraccion} style={{ padding: "5px 10px", backgroundColor: "#ddd", border: "1px solid #aaa", borderRadius: "5px", cursor: "pointer" }}>-</button>
            <span>{contador}</span>
            <button onClick={incremento} style={{ padding: "5px 10px", backgroundColor: "#ddd", border: "1px solid #aaa", borderRadius: "5px", cursor: "pointer" }}>+</button>
          </div>
          <button style={{ padding: "10px 15px", backgroundColor: "#282c34", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Agregar {contador} al carrito</button>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
