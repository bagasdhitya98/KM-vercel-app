import { BrowserRouter, Routes, Route } from "react-router-dom";

import News from "./pages/News";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/detail/:title" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
