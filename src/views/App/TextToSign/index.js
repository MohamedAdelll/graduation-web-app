import { Button, Container, Input, Row } from "reactstrap";

export default function TextToSign() {
  return (
    <Container>
      <Row>
        <h3>Type the text you want to be translated to sign language!</h3>
        <Input
          type="textarea"
          height={"50px"}
          placeholder="Write something to be translated..."
        ></Input>
        <Button color="primary">Translate</Button>
        <Button>Reset</Button>
      </Row>
      <Row className="mt-5">Avatar goes here</Row>
    </Container>
  );
}
