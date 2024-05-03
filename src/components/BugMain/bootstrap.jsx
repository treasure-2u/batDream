import Accordion from 'react-bootstrap/Accordion';
// import './BugMain/bootstrap_styles.scss';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <div></div>
        <Accordion.Header>병해충 1</Accordion.Header>
        <Accordion.Body>물봐 진짜</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>병해충 2</Accordion.Header>
        <Accordion.Body>뭘보냐고 야</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;
