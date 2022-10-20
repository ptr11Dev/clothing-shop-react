import { Route, Routes } from "react-router-dom";

import Authentication from "./routes/Authentication/Authentication";
import Homepage from "./routes/Homepage/Homepage";
import Navigation from "./routes/Navigation/Navigation";
import Shop from "./routes/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
