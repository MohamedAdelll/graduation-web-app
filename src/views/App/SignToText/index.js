import { useEffect, useState } from "react";

import CameraComponent from "components/Camera";
import { API } from "config";
import { Col, Container, Input, Row } from "reactstrap";
import { io } from "socket.io-client";

export default function SignToText() {
  const [connection, handleConnenction] = useState(false);
  const [socketInstance, setSocketInstance] = useState(null);
  const [text, setText] = useState("");

  useEffect(function releasingCameraOnPageLeave() {
    function releaseCamera() {
      fetch(`${API}/release_camera`);
    }
    return releaseCamera;
  }, []);

  useEffect(
    function maintainingSocketConnection() {
      console.log({ connection, socketInstance });
      if (!connection && socketInstance) {
        socketInstance.disconnect();
        return;
      }
      if (!connection && !socketInstance) return;

      const socket = io("localhost:5001/", {
        transports: ["websocket"],
        cors: {
          origin: "http://localhost:3000/",
        },
      });

      if (!socketInstance) setSocketInstance(socket);

      socket.emit("start_analyzing", { data: "I'm connected!" });

      socket.on("data", ({ data }) => {
        console.log(data);
        if (typeof data === "string") {
          setText((prev) => `${prev} ${data}`);
        }
      });

      socket.on("disconnect", (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    },
    [connection, socketInstance]
  );
  return (
    <Container>
      <Row>
        <h3>
          You need to open the camera in order to translate the video to text
        </h3>
      </Row>
      <Col>
        <CameraComponent handleConnection={handleConnenction} />
      </Col>
      <Row style={{ paddingBottom: 100 }}>
        <Input
          className="mt-5"
          readOnly
          placeholder="The text will be generated once you start recording"
          value={text}
          style={{ color: "#9ea3b1", fontSize: "1.2rem" }}
        ></Input>
      </Row>
    </Container>
  );
}
