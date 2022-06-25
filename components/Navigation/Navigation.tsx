import Link from "next/link";
import React from "react";
import { Nav, Button } from "react-bootstrap";
import "./Navigation.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { Logo } from "../../import/importAssets";

const Navigation = () => {
  const { user, error, isLoading } = useUser();
  if (!user) {
    return (
      <nav className="navbar navbar-expand-md  bg-dark navbar-dark">
        <div className="container-fluid justify-content-between">
          <ul className="nav navbar-nav">
            <li>
              <Nav.Item>
                <Image src={Logo} width={40} height={40}></Image>
              </Nav.Item>
            </li>
            <li>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
            </li>
            <li>
              <Nav.Item>
                <Nav.Link href="/Hotel">Hotel</Nav.Link>
              </Nav.Item>
            </li>
            <li>
              <Nav.Item>
                <Nav.Link href="/">Booking History</Nav.Link>
              </Nav.Item>
            </li>
            <li>
              <Nav.Item>
                <Nav.Link href="/About">About Us</Nav.Link>
              </Nav.Item>
            </li>

            <li className="my-2 d-block d-sm-block d-xl-none d-lg-none d-md-none">
              <Link href="/api/auth/login">
                <Button variant="outline-primary">Login</Button>
              </Link>
            </li>
          </ul>

          <ul className="nav navbar-nav">
            <li className="mx-2 d-none d-md-block">
              <Link href="/api/auth/login">
                <Button variant="outline-primary">Login</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  if (error) {
    return <div>Error..</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <nav className="navbar navbar-expand-md  bg-dark navbar-dark">
      <div className="container-fluid justify-content-between">
        <ul className="nav navbar-nav">
          <li>
            <Nav.Item>
              <Image src={Logo} width={40} height={40}></Image>
            </Nav.Item>
          </li>
          <li>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
          </li>
          <li>
            <Nav.Item>
              <Nav.Link href="/Hotel">Hotel</Nav.Link>
            </Nav.Item>
          </li>
          <li>
            <Nav.Item>
              <Nav.Link href="/History">Booking History</Nav.Link>
            </Nav.Item>
          </li>
          <li>
            <Nav.Item>
              <Nav.Link href="/About">About Us</Nav.Link>
            </Nav.Item>
          </li>

          <li className="my-2 d-block d-sm-block d-xl-none d-lg-none d-md-none">
            <Link href="/api/auth/logout">
              <Button variant="outline-danger">Logout</Button>
            </Link>
          </li>
        </ul>

        <ul className="nav navbar-nav">
          <li className="mx-md-2 d-none d-md-block d-flex d-inline">
            <Image src={user?.picture ?? ""} width="40" height="40" />
          </li>

          <li className="mx-md-2 d-none d-md-block">
            <p className="text-white h3">{user.name}</p>
          </li>

          <li className="mx-2 d-none d-md-block">
            <Link href="/api/auth/logout">
              <Button variant="outline-danger">Logout</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
