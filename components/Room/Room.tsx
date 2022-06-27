import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Image from "next/image";
import { RoomImg, RoomImg2 } from "../../import/importAssets";
import { useUser } from "@auth0/nextjs-auth0";

const Room = () => {
  const [room, setRoom] = useState<Room[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const user = useUser();
  const userId = user.user?.sub;

  if (typeof window !== "undefined") {
    var url = window.location.pathname;
    var roomId = url.substring(url.lastIndexOf("/") + 1);
  }

  const createTransaction = async () => {
    await fetch("/api/transaction/addTransaction", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        roomId,
      }),
      method: "POST",
    });
    router.push("/");
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/api/room/${roomId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId: roomId,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((room) => {
        setRoom(room);
        setLoading(false);
      });
  }, []);

  interface Room {
    id: number;
    name: string;
    desc: string;
    status: boolean;
    price: number;
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
          {room?.map((room: Room) => (
            <React.Fragment key={room.id}>
              <div className="pb-md-3">
                <div className="header py-md-2 d-flex justify-content-between">
                  <h1>Room {room.name}</h1>
                  <div className="d-flex align-items-end my-md-2">
                    <div className="py-md-2 px-md-3 bg-success text-light rounded mx-md-2">
                      {room.status}
                    </div>
                    <div className="py-md-2 px-md-3  bg-info text-light rounded mx-md-2">
                      Rp {room.price},--
                    </div>
                  </div>
                </div>
                <div className="header py-md-1">
                  <p className="">{room.desc}</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <Image
                      className="rounded"
                      src={RoomImg}
                      width={550}
                      height={300}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      className="rounded"
                      src={RoomImg2}
                      width={550}
                      height={300}
                    ></Image>
                  </div>
                </div>
                <div className="d-grid gap-2 mt-md-5">
                  <Button
                    className=""
                    variant="primary"
                    size="lg"
                    onClick={createTransaction}
                  >
                    Book
                  </Button>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Container>
      </Card>
    </>
  );
};

export default Room;
