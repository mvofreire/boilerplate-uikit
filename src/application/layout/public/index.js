import React from "react";
import { Row, Col } from "components";
import "./public.css";

const LayoutPublic = ({ content }) => (
  <Row center="xs" middle="xs" style={{ height: "100%" }}>
    <Col xs={12} md={6}>
      Images
    </Col>
    <Col xs={12} md={6}>
      {content}
    </Col>
  </Row>
);

export { LayoutPublic };
