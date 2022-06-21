import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Room } from "../../import/importAssets";
import Image from "next/image";
import router, { useRouter } from "next/router";

const HotelDetail = () => {
  const [hotel, setHotel] = useState<Hotel[] | null>(null);
  const [room, setRoom] = useState<Room[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  if (typeof window !== "undefined") {
    var url = window.location.pathname;
    var hotelId = url.substring(url.lastIndexOf("/") + 1);
  }

  useEffect(() => {
    setLoading(true);
    fetch(`/api/hotel/${hotelId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hotelId: hotelId,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((hotel) => {
        setHotel(hotel);
      });
    fetch("/api/room/getRooms", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hotelId: hotelId,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((room) => {
        setRoom(room);
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

  interface Room {
    id: number;
    name: string;
    desc: string;
    status: boolean;
    price: number;
    hotelId: number;
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
    <>
      <Card className="py-lg-4">
        <Container className="bg-warning">
          {hotel?.map((hotel: Hotel) => (
            <React.Fragment key={`hotel-${hotel.id}`}>
              <div className="header py-md-2">
                <h1>Hotel {hotel.name}</h1>
              </div>
              <div className="header py-md-1">
                <p className="">{hotel.desc}</p>
              </div>
            </React.Fragment>
          ))}
          <div>
            <h2>Room List</h2>
          </div>
          <div className="d-flex flex-wrap flex">
            {room?.map((room: Room) => (
              <div
                className="card  my-md-2 mx-md-4"
                style={{ width: "17rem", height: "17rem" }}
                key={`room-${room.id}`}
              >
                <div className="card-body">
                  <h5 className="card-title">Room {room.name}</h5>
                  <Image
                    className="my-md-1"
                    src={Room}
                    layout="responsive"
                  ></Image>
                  <div className="my-md-3 justify-content-between d-flex align-items-end">
                    <Button
                      variant="success"
                      onClick={() =>
                        router.push({
                          pathname: `/Hotel/[hotelId]/[roomId]`,
                          query: { roomId: room.id, hotelId: hotelId },
                        })
                      }
                    >
                      {room.status}
                    </Button>
                    <div className="p-md-2 bg-info text-light rounded">
                      Rp {room.price},--
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Card>
    </>
  );
};

export default HotelDetail;
