import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Process from "./components/Process/Process";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import { Provider } from "./components/Provider/Provider";

export default function App() {
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const productId = window.location.pathname.split("/")[1];
    setProductId(parseInt(productId));
  }, []);
  return (
    <Provider useMocks>
      <div className="main">
        <Header />
        <ProductDetail />
        <Process />
        <Footer />
      </div>
    </Provider>
  );
}
