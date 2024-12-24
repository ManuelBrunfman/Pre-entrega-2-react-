// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<ItemListContainer saludo ="Bienvenidos a nuestra tienda" />} />
        {/* Ruta por categoría */}
        <Route path="/category/:id" element={<ItemListContainer saludo ="Productos filtrados por categoría" />} />
        {/* Ruta para el detalle del producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* Ruta 404 */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;