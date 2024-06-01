import { useState } from "react";

import { MicButton } from "components/Buttons/MicButton";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
} from "reactstrap";

export default function TextToSign() {
  const [text, setText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Avatar");
  const [framesPath, setFramesPath] = useState(null);

  function handleDropdownChange(e) {
    console.log(e.target.textContent);
    setSelectedItem(e.target.textContent);
  }

  async function handleTranslate() {
    const response = await fetch("http://localhost:5001/api/texttosign", {
      method: "POST",
      body: JSON.stringify({ text, avatar: !!selectedItem.startsWith("Use") }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    if (data.frames_path) {
      setFramesPath(data.frames_path[0]);
    }
  }

  function toggleDropdown() {
    setDropdownOpen((prev) => !prev);
  }
  return (
    <Container>
      <h3>Type the text you want to be translated to sign language!</h3>
      <Row className="align-items-center">
        <Col>
          <Input
            type="textarea"
            height="40px"
            dir={!text ? "ltr" : "rtl"}
            style={{ fontSize: "1.2rem" }}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write something to be translated..."
          ></Input>
        </Col>
        <Col className="flex-grow-0">
          <MicButton
            onTextChange={(txt) => setText((prev) => `${prev} ${txt}`)}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Dropdown
          className="mr-auto"
          isOpen={dropdownOpen}
          toggle={toggleDropdown}
        >
          <DropdownToggle caret>{selectedItem}</DropdownToggle>
          <DropdownMenu onChange={(e) => console.log(e)}>
            <DropdownItem defaultChecked onClick={handleDropdownChange}>
              Use Avatar
            </DropdownItem>
            <DropdownItem onClick={handleDropdownChange}>
              Do not use Avatar
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button onClick={handleTranslate} color="primary">
          Translate
        </Button>
        <Button onClick={() => setText("")}>Reset</Button>
      </Row>
      <Row className="mt-5 justify-content-center">
        {framesPath ? (
          <iframe
            src={framesPath}
            width="640"
            height="480"
            title="video"
            allow="autoplay"
            referrerPolicy="origin"
          ></iframe>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
}
