import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "views/App";
import SignToText from "views/App/SignToText";
import TextToSign from "views/App/TextToSign";
import Index from "views/Index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/graduation-web-app">
        <Route index element={<Index />} />
        <Route path="app" element={<App />}>
          <Route index path="text-to-sign" element={<TextToSign />} />
          <Route index path="sign-to-text" element={<SignToText />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
