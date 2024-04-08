import CameraComponent from "components/Camera";
import { Col, Container, Input, Row } from "reactstrap";

export default function SignToText() {
  console.log("hena");
  return (
    <Container>
      <Row>
        <h3>
          You need to open the camera in order to translate the video to text
        </h3>
      </Row>
      <Col>
        <CameraComponent />
      </Col>
      <Input
        className="mt-5"
        readOnly
        placeholder="The text will be generated once you start recording"
      ></Input>
    </Container>
  );
}
