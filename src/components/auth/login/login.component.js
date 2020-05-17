import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import beerLogo from "../../../assets/img/android-chrome-192x192.png";
import GoogleBtn from '../../../GoogleBtn';

function Login({signInWithEmail}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    signInWithEmail(email, password)
      .then((res) => {
        if (!res.user) {
          setError("Error creating user");
          return;
        }

        window.location.href = "/menu";
      })
      .catch((err) => {
        setError("Error during sign in");
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
            <i>Login</i>
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
              {error && <p style={{ color: "#ff0000" }}>{error}</p>}
            </FormGroup>
            <Button style={{width: "180px", height:"42px"}} onClick={handleSubmit}>Login</Button>

            <div style={{marginTop: "10px"}}>
              <GoogleBtn/>
           </div>
      
          </Form>
          <Button
            variant="outlined"
            style={{ marginTop: "2vh" }}
            onClick={() => (window.location.href = "/register")}
          >
            Don't have account? Register
          </Button>
        </Col>
        <Col></Col>
      </Row>

      
    </Container>
  );
}

export default Login;
