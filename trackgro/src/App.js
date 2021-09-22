import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Process from "./components/Process/Process";

import { Provider } from "./components/Provider/Provider";

export default function App() {
  return (
    <Provider useMocks>
      <div className="main">
        <Header />
        {/* Detail for the product/nutrition facts component  */}
        {/* Process Component */}
        <Process />
        <Footer />
      </div>
    </Provider>
  );
}
