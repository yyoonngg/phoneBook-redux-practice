import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col>
          <Form.Control
            type="name"
            placeholder="이름"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
