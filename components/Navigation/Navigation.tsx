import Link from 'next/link';
import React from 'react'
import { Nav, Button, Form, FormControl } from 'react-bootstrap';
import './Navigation.module.css'

const Navigation = () => {

  return (
    <nav className="navbar navbar-expand-md  bg-dark navbar-dark">
      <div className="container-fluid justify-content-between">
        <ul className='nav navbar-nav'>
          <li><Nav.Item><Nav.Link href="/">Hotelify</Nav.Link></Nav.Item></li>
          <li><Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item></li>
          <li><Nav.Item><Nav.Link href="/Hotel">Hotel</Nav.Link></Nav.Item></li>
          <li><Nav.Item><Nav.Link href="/">Booking History</Nav.Link></Nav.Item></li>
          <li><Nav.Item><Nav.Link href="/About">About Us</Nav.Link></Nav.Item></li>

          <li className="my-2 d-block d-sm-block d-xl-none d-lg-none d-md-none">
            <Link href="/Login"><Button variant="outline-primary">Login</Button></Link>
          </li>
          <li className="my-2 d-block d-sm-block d-xl-none d-lg-none d-md-none">
            <Link href="/Register"><Button variant="outline-danger">Register</Button></Link>
          </li>
        </ul>

        <ul className='nav navbar-nav'>
          <li className="mx-2 d-none d-md-block">
            <Link href="/Login"><Button variant="outline-primary" >Login</Button></Link>
          </li>
          <li className="mx-2 d-none d-md-block">
            <Link href="/Register"><Button variant="outline-danger" >Register</Button></Link>
          </li>
        </ul>
      </div>

      {/* 
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
    </nav>
  )
}
export default Navigation



