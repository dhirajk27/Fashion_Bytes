// App.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MenProducts from "./components/MenProducts";
import WomenProducts from "./components/WomenProducts";
import KidsProducts from "./components/KidsProducts"; // Import KidsProducts component

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<MenProducts />} />
        <Route path="/women" element={<WomenProducts />} />
        <Route path="/kids" element={<KidsProducts />} /> {/* Add KidsProducts route */}
      </Routes>
    </div>
  );
};

export default App;
