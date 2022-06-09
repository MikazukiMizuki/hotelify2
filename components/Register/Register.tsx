import React from "react";
import { Form, Button, Card, FormControl, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { BgRegister } from "../../import/importAssets";
import "./Register.module.css";

const Register = () => {
  return (
    <Card className="vh-100 bg-dark">
      <Container className="h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <Image
                    src={BgRegister}
                    alt="login form"
                    className="img-fluid"
                    layout="responsive"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <Card.Body className="text-black">
                    <Form>
                      <div className="d-flex align-items-center mb-2 pb-1 justify-content-center">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <Card.Title>
                          <div className="h1 fw-bold">Hotelify</div>
                        </Card.Title>
                      </div>

                      <Card.Text
                        className="fw-normal mb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Register your account
                      </Card.Text>

                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>UserName</Form.Label>
                        <FormControl type="text" placeholder="UserName" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <FormControl type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <FormControl type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formConfirmPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <FormControl type="password" placeholder="Password" />
                      </Form.Group>

                      <div className="my-3">
                        <Link href="/Login">
                          <Button variant="primary" type="submit">
                            Register
                          </Button>
                        </Link>
                      </div>

                      <div className="mb-2">
                        <p style={{ color: "#393f81" }}>
                          Already have account??{" "}
                          <Link href="/Login" style={{ color: "#393f81" }}>
                            Login here
                          </Link>
                        </p>
                      </div>

                      <div>
                        <p>
                          By continuing, you are indicating that you accept our{" "}
                          <Link href="/" className="small text-muted">
                            Terms of use
                          </Link>{" "}
                          and{" "}
                          <Link href="/" className="small text-muted">
                            Privacy policy
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </Card.Body>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default Register;
