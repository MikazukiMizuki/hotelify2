import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

const HotelDetail = () => {
  const [hotel, setHotel] = useState<Hotel[] | null>(null);
  const [room, setRoom] = useState<Room[] | null>(null);
  const [isLoading, setLoading] = useState(false);

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
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card className="py-lg-4">
        <Container className="bg-warning">
          {hotel?.map((hotel: Hotel) => (
            <>
              <div className="header py-md-2">
                <h1>Hotel {hotel.name}</h1>
              </div>
              <div className="header py-md-1">{hotel.desc}</div>
            </>
          ))}
          <div>
            <h2>Room List</h2>
          </div>
          <div className="d-flex flex-wrap flex">
            {room?.map((room: Room) => (
              <div
                className="card  my-md-3 mx-lg-4"
                style={{ width: "17rem", height: "18rem" }}
                key={room.id}
              >
                <div className="card-body">
                  <h5 className="card-title">Room {room.name}</h5>
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
