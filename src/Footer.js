import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h3>Katalog elektronarzędzi</h3>
          </Col>
          <Col>
            Katalog elektronarzędzi Maciej Bartosiak - 109075 - Grupa 5
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
