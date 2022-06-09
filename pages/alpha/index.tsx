import React, { useEffect, useState } from "react";
import { Page } from "../../types";

const Index: Page = (props) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/tes")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  interface User {
    id: string;
    email: number;
    name: string;
  }

  return (
    <ul>
      {data.map((post: User) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
};

export default Index;
