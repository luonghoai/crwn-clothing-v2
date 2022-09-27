import { Routes, Route } from "react-router-dom";

import Navigation from "./routers/navigation/navagation.component";
import Home from "./routers/home/home.component";

const Shop = () => {
  return <div>Shop Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
