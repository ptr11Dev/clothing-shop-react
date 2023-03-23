import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Spinner from "./components/Spinner/Spinner";
import { GlobalStyle } from "./global.styles";
import { checkUserSession } from "./store/user/user.action";

const Homepage = lazy(() => import("./routes/Homepage/Homepage"));
const Authentication = lazy(() =>
  import("./routes/Authentication/Authentication")
);
const Checkout = lazy(() => import("./routes/Checkout/Checkout"));
const Shop = lazy(() => import("./routes/Shop/Shop"));
const Navigation = lazy(() => import("./routes/Navigation/Navigation"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
