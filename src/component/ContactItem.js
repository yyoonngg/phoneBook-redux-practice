import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <div className="contact-item">
      <Row>
        <Col lg={2}>
          <img width={70} src="https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze" />
        </Col>
        <Col lg={10}>
          <h3>{item.name}</h3>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
