import Accordion from "react-bootstrap/Accordion";

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;
