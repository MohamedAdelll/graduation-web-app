// CameraComponent.js
import React, { useRef, useState } from "react";

import Webcam from "react-webcam";
import { Button, Col, Container } from "reactstrap";

export default function CameraComponent() {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const startCamera = () => {
    setIsCameraOn(true);
  };

  const stopCamera = () => {
    setIsCameraOn(false);
  };

  return (
    <Container>
      {isCameraOn ? (
        <Col>
          <Webcam audio={false} ref={webcamRef} />
          <Button onClick={stopCamera}>Stop Camera</Button>
        </Col>
      ) : (
        <Col>
          <Button onClick={startCamera}>Start Camera</Button>
        </Col>
      )}
    </Container>
  );
}
