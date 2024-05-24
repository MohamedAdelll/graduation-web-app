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

  function handleDropdownChange(e) {
    console.log(e.target.textContent);
    setSelectedItem(e.target.textContent);
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
            value={text}
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
        <Button color="primary">Translate</Button>
        <Button onClick={() => setText("")}>Reset</Button>
      </Row>
      <Row className="mt-5">
        <img />
      </Row>
    </Container>
  );
}
