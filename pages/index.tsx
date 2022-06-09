import React from "react";
import { Page } from "../types";
// import prisma from "../lib/prisma";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.user.findMany({
//     select: {
//       userEmail: true,
//       userName: true,
//     },
//   });
//   return { props: { feed } };
// };

// type User = {
//   userEmail?: String;
//   userName?: string;
// };

const Home: Page = (props: any) => {
  return (
    <>
      {/* <ul>
        {props.feed.map((post: User) => (
          <li>{post.userName}</li>
        ))}
      </ul> */}
      
    </>
  );
};

export default Home;
