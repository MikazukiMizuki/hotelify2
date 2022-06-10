import React, { useState } from "react";
import { Form, Button, Card, FormControl, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { BgLogin } from "../../import/importAssets";
import "./Login.module.css";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const onSubmitForm = async () => {
    await fetch("api/user/loginUser", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      method: "POST",
    });
    router.push("/Register");
  };
  return (
    <Card className="vh-100 bg-dark">
      <Container className="h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-7 col-lg-4 d-none d-md-block">
                  <Image
                    src={BgLogin}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <Card.Body className="text-black">
                    <Form>
                      <div className="d-flex align-items-center mb-3 justify-content-center">
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
                        Sign into your account
                      </Card.Text>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label name="email">Email Address</Form.Label>
                        <FormControl
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email"
                        />
                        <Form.Text className="text-muted">
                          We&apos;ll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label name="password">Password</Form.Label>
                        <FormControl
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </Form.Group>

                      <div className="my-4">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={onSubmitForm}
                        >
                          Login
                        </Button>
                      </div>

                      <div className="mb-4">
                        <Link className="small text-muted" href="/">
                          Forgot password?
                        </Link>
                      </div>

                      <div className="mb-4">
                        <p style={{ color: "#393f81" }}>
                          Don&apos;t have an account?{" "}
                          <Link href="/Register" style={{ color: "#393f81" }}>
                            Register here
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

export default Login;
