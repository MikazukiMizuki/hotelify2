import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Link from "next/link";
import "./Hotel.module.css"
// import { useUser } from "@auth0/nextjs-auth0";
import { Building } from "../../import/importAssets";
import Image from "next/image";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";

const Hotel = () => {
  // const { user } = useUser();
  const [data, setData] = useState<Hotel[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/hotel/getHotel")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  interface Hotel {
    id: number;
    name: string;
    desc: string;
    email: string;
    link1: string;
    link2: string;
    location: string;
  }

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <Card className="bg-danger">
      <Container className="py-lg-4">
        <div>
          <h1 className="">This Is Our Hotel List!</h1>
        </div>
        <div className="d-flex flex-wrap flex">
          {data?.map((hotel: Hotel) => (
            <div
              className="card  my-md-3 mx-lg-4"
              style={{ width: "17rem", height: "18rem" }}
              key={hotel.id}
            >
              <div className="card-body">
                <h5 className="card-title">Hotel {hotel.name}</h5>
                <Image
                  className="my-md-1"
                  src={Building}
                  layout="responsive"
                ></Image>
                <h6 className="card-subtitle my-2 text-muted">
                  {hotel.location}
                </h6>
                <Link href="">
                  <Button variant="outline-primary">See more..</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Card>
  );
};

export default Hotel;
