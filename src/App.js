import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";

import { selectAll, fetchCart } from "./reducers/cart";
import { updateCart } from "./utils/api";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Product from "./views/Product";
import Profile from "./views/Profile";
import Footer from "./components/Footer";
import AuthGuard from "./components/AuthGuard";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently();
        console.log(accessToken);
        // setAxiosTokenInterceptor(accessToken);
        dispatch(fetchCart(accessToken));
      }
    })();
  }, [isAuthenticated]);

  const allCartItems = useSelector(selectAll);
  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently();
        try {
          await updateCart(accessToken, { items: allCartItems });
        } catch (err) {
          console.log(err.response.data);
        }
      }
    })();
  }, [allCartItems]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="p/:productName" element={<Product />} />
        <Route path="profile/*" element={<AuthGuard component={Profile} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
