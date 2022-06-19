import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const HotelDetail = () => {
  const [data, setData] = useState<Hotel[] | null>(null);
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
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((hotel: Hotel) => (
        <ul key={hotel.id}>
          <li>{hotel.name}</li>
          <li>{hotel.desc}</li>
        </ul>
      ))}
    </>
  );
};

export default HotelDetail;
