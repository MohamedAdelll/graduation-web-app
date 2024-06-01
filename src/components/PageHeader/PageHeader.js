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

import Lottie from "react-lottie";
// reactstrap components
import { Container } from "reactstrap";

import animationData from "../../assets/lotties/heroLottie.json";

export default function PageHeader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      {/* <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" /> */}
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Sign Language Translator</h1>
          <h3 className="d-none d-sm-block" style={{ opacity: 0.5 }}>
            An Awesome AI Sign language translator that can help you to
            communicate with the deaf community.
          </h3>
          <Lottie options={defaultOptions} height={500} width={800} />
        </div>
      </Container>
    </div>
  );
}
