import Accordion from "react-bootstrap/Accordion";

function AlwaysOpenExample() {
  return (
    <Accordion
      className="pb-4 mt-4 mt-sm-5"
      defaultActiveKey={["0"]}
      alwaysOpen
    >
      <Accordion.Item eventKey="0" className="mb-4">
        <Accordion.Header>
          Lörem ipsum koda astrobel: sutaveligen.
        </Accordion.Header>
        <Accordion.Body>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="mb-4">
        <Accordion.Header>Rodod bänera viliga</Accordion.Header>
        <Accordion.Body>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="mb-4">
        <Accordion.Header>
          Pregigt primasofi dede facebooka: förutom
        </Accordion.Header>
        <Accordion.Body>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="mb-4">
        <Accordion.Header>
          Ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
        </Accordion.Header>
        <Accordion.Body>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Rodod bänera viliga. Pregigt primasofi dede facebooka
        </Accordion.Header>
        <Accordion.Body>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;
