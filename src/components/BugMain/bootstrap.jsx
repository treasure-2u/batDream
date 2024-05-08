import Accordion from 'react-bootstrap/Accordion';
// import './BugMain/bootstrap_styles.scss';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <div></div>
        <Accordion.Header>작물별 도감정보</Accordion.Header>
        <Accordion.Body>식량작물</Accordion.Body>
        <Accordion.Body>과수</Accordion.Body>
        <Accordion.Body>채소</Accordion.Body>
        <Accordion.Body>하훼</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>병해충별 도감정보</Accordion.Header>
        <Accordion.Body>벌렝</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>주간농사정보</Accordion.Header>
        <Accordion.Body>농사 시러</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>병해충 발생정보</Accordion.Header>
        <Accordion.Body>벌레 시러</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;
