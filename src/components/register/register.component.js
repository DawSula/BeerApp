import React, { useState } from "react";

import {
  Container,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import beerLogo from "../../assets/img/android-chrome-192x192.png";

function Register({ createUserWithEmailAndPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (!res.user) {
          setError("Error creating user");
          return;
        }

        window.location.href = "/menu";
      })
      .catch((err) => {
        setError("Error creating user");
      });
  };

  return (
    <Container fluid style={{ marginTop: "15vh" }}>
      <Row>
        <Col>
          <img src={beerLogo} alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center">
            <i>Register</i>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <FormGroup>
              <FormControl
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              ></FormControl>
            </FormGroup>
            {error && <p style={{ color: "#ff0000" }}>{error}</p>}
            <Button style={{width: "180px",height:"42px"}} onClick={handleSubmit}>Register</Button>
          </Form>
          <Button
            variant="outlined"
            style={{ marginTop: "2vh" }}
            onClick={() => (window.location.href = "/login")}
          >
            Already have account? Login
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Register;
