import { Routes, Route } from "react-router-dom";

import Homepage from "./routes/Homepage/Homepage";
import Navigation from "./routes/Navigation/Navigation";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
