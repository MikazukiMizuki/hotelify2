import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import "./Hotel.module.css";
import { Building } from "../../import/importAssets";
import Image from "next/image";
import { useRouter } from "next/router";

const Hotel = () => {
  const [data, setData] = useState<Hotel[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch("api/hotel/getHotels")
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

  if (isLoading) {
    return (
      <>
        <Card>
          <Container>
            <div>Loading...</div>
          </Container>
        </Card>
      </>
    );
  }

  return (
    <Card className="bg-danger">
      <Container className="py-lg-4">
        <div>
          <h1 className="">Hotel List</h1>
        </div>
        <div className="d-flex flex-wrap flex">
          {data?.map((hotel: Hotel) => (
            <React.Fragment key={hotel.id}>
              {" "}
              <div
                className="card  my-md-3 mx-lg-4"
                style={{ width: "17rem", height: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Hotel {hotel.name}</h5>
                  <Image
                    className="my-md-1"
                    src={Building}
                    layout="responsive"
                  ></Image>
                  <h6 className="card-subtitle my-2 text-muted">
                    <p className="text-justify">{hotel.location}</p>
                  </h6>
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      router.push({
                        pathname: "/Hotel/[hotelId]",
                        query: { hotelId: hotel.id },
                      })
                    }
                  >
                    See more &rarr;
                  </Button>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </Card>
  );
};

export default Hotel;
