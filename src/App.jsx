import { BrowserRouter, Routes, Route } from "react-router-dom";

import News from "./pages/News";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Bookmark from "./pages/Bookmark";
import Product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/ecommerce/product" element={<Product />} />
        <Route path="/detail/:title" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
