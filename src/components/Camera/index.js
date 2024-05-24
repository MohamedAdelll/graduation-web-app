import React, { useState } from "react";

import { Button, Col, Container } from "reactstrap";

export default function CameraComponent({ handleConnection }) {
  const [recording, setRecording] = useState(false);

  function startRecording() {
    setRecording((prev) => !prev);
    handleConnection((prev) => !prev);
  }

  console.log("video_capture");

  return (
    <Container>
      <img src="http://127.0.0.1:5001/api/video_feed" />
      <Col>
        <Button onClick={startRecording}>
          {recording ? "Stop" : "Start"} Recording
        </Button>
      </Col>
    </Container>
  );
}
