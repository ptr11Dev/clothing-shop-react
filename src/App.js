import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Authentication from "./routes/Authentication/Authentication";
import Checkout from "./routes/Checkout/Checkout";
import Homepage from "./routes/Homepage/Homepage";
import Navigation from "./routes/Navigation/Navigation";
import Shop from "./routes/Shop/Shop";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
