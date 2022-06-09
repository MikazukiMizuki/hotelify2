import React, { useEffect, useState } from "react";

function index() {
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

  return (
    <ul>
      {data.map((post) => (
        <li>{post.name}</li>
      ))}
    </ul>
  );
}

export default index;
