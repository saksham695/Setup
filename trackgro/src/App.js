import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
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
    <Provider>
      <div className="main">
        <ProductDetail productId={productId} />
        <Process productId={productId} />
        <Footer />
      </div>
    </Provider>
  );
}
