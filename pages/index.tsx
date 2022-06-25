import React from "react";
import ReactDOM from "react-dom";
import { Card, Container } from "react-bootstrap";
import { Rising, Discount } from "../import/importAssets";
import Image from "next/image";
import { Page } from "../types";
import "../styles/Home.module.css";

const Home: Page = () => {
  return (
    <>
      <Card>
        <div className="background">
          <Container>
            <div className="my-5 justify-content-center text-justify">
              <div className="my-3 d-flex border border-black">
                <div className="col-md-8 col-lg-6 bg-dark bg-opacity-50 text-white">
                  <h1 className="text-light text-opacity-75">
                    The Rising Upcomer in Hotel Industry
                  </h1>
                  <p className="text-justify">
                    Founded in 2020 in Jakarta, Hotelify.com has grown from a
                    small idea to one of the rising star in digital travel
                    companies. It is hotelify&apos;s job to make sure that
                    everyone can travel around the Indonesia with a great
                    pleasure.
                  </p>

                  <p className="text-justify">
                    By investing in the technology that helps take the friction
                    out of travel, Hotelify.com seamlessly connects millions of
                    travellers with memorable experiences, a range of transport
                    options and incredible places to stay - from homes to hotels
                    and much more. As one of the world&apos;s largest travel
                    marketplaces for both established brands and entrepreneurs
                    of all sizes, Hotelify.com enables properties all over the
                    Indonesian to rise to a greater height than before.
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
                    We will hold great event for every period of time because we
                    know what it is to survive in this industry. We will hold
                    many event to make our customer happy and feel comfortable
                    while using our service. We hope that you will join us when
                    you have the chance to do so.
                  </p>

                  <p>
                    Our event will consist of great discount, offer, promotion, and collaboration with another company. We also plan to hold festival in one of our business partner so that we can satisfy more customer. Do not forget to join us!
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
