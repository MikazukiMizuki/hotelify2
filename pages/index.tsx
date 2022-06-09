import React from "react";
import { Card, Container } from "react-bootstrap";
import { Rising, Discount } from "../import/importAssets";
import Image from "next/image";
import { Page } from "../types";
import "../styles/Home.module.css";
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

/* <ul>
        {props.feed.map((post: User) => (
          <li>{post.userName}</li>
        ))}
      </ul> */

const Home: Page = () => {
  return (
    <>
      <Card>
        <div className="background">
          <Container>
            <div className="my-5 justify-content-center">
              <div className="my-3 d-flex border border-black">
                <div className="col-md-8 col-lg-6 bg-dark bg-opacity-50 text-white">
                  <h1 className="text-light text-opacity-75">
                    The Rising Upcomer in Hotel Industry
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae ullam laudantium ut saepe laboriosam est iusto
                    vitae hic consequuntur, possimus temporibus natus
                    consequatur. Velit saepe voluptatem illo dolor, aperiam
                    itaque.
                  </p>

                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officia illum quibusdam culpa doloremque sit consequatur,
                    hic alias nulla optio aspernatur rerum, ut dolorem dolor
                    voluptatem accusantium, debitis aperiam harum rem?
                  </p>
                </div>

                <div className="col-md-5 col-lg-6 d-none d-lg-block">
                  <Image
                    src={Rising}
                    alt="Story"
                    className="side-image img-fluid"
                    layout="responsive"
                    style={{ borderRadius: "1rem 1rem 1rem 1rem" }}
                  />
                </div>
              </div>
            </div>

            <div className="my-5 justify-content-center">
              <div className="my-3 d-flex border border-black">
                <div className="col-md-8 col-lg-6 text-white bg-dark bg-opacity-50 ">
                  <h1 className="text-light text-opacity-75">
                    Exciting and Fun Event
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae ullam laudantium ut saepe laboriosam est iusto
                    vitae hic consequuntur, possimus temporibus natus
                    consequatur. Velit saepe voluptatem illo dolor, aperiam
                    itaque.
                  </p>

                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officia illum quibusdam culpa doloremque sit consequatur,
                    hic alias nulla optio aspernatur rerum, ut dolorem dolor
                    voluptatem accusantium, debitis aperiam harum rem?
                  </p>
                </div>

                <div className="col-md-5 col-lg-6 d-none d-lg-block">
                  <Image
                    src={Discount}
                    alt="Story"
                    className="side-image img-fluid"
                    layout="responsive"
                    style={{ borderRadius: "1rem 1rem 1rem 1rem" }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Card>
    </>
  );
};

export default Home;
