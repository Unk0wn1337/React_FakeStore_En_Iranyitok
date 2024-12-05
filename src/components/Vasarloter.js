import React from 'react';
import Termek from './Termek';
import { Col, Container, Row } from 'react-bootstrap';

function Vasarloter(props) {
  return (
    <Container>
      <Row>
        {props.termekLista.map((termek) => (
          <Col key={termek.id} sm={4} className="mb-4">
            <Termek termek={termek} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Vasarloter;
