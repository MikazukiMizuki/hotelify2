import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { Vision, Mission, Story, Founder } from "../../import/importAssets";
import "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <Container className="">
      <div className="my-6 justify-content-center">
        <div className="my-3 d-flex bg-warning">
          <div className="col-md-8 col-lg-6">
            <h1 className="text-primary text-opacity-75">Our Story</h1>
            <p className="text-justify">
              Founded in 2020 in Jakarta, Hotelify.com has grown from a small
              idea to one of the rising star in digital travel companies. It is
              hotelify&apos;s job to make sure that everyone can travel around
              the Indonesia with a great pleasure.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              illum quibusdam culpa doloremque sit consequatur, hic alias nulla
              optio aspernatur rerum, ut dolorem dolor voluptatem accusantium,
              debitis aperiam harum rem?
            </p>
          </div>
          <div className="col-md-5 col-lg-6 d-none d-lg-block">
            <Image
              src={Story}
              alt="Story"
              className="side-image img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
          </div>
        </div>

        <div className="my-3 d-flex bg-warning">
          <div className="col-md-3 col-lg-6">
            <h1 className="text-primary text-opacity-75">Vision</h1>
            <p>
              Our vision is to be the greatest digital travelling services in
              the world and to do so, for the first step we need to conquer this
              country. We know that we&apos;re still green and newbie. But we
              need to dream big to reach a greater height.
            </p>

            <p>
              To reach that kind of big dream we need to put our effort
              seriously, we will give it our all to reach that impossible pipe
              dream of us. We hope that we receive support from you too!
            </p>
          </div>
          <div className="col-md-3 col-lg-6 d-none d-lg-block">
            <Image
              src={Vision}
              alt="Vision"
              className="side-image img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
          </div>
        </div>

        <div className="my-3 d-flex bg-warning">
          <div className="col-md-3 col-lg-6">
            <h1 className="text-primary text-opacity-75">Mission</h1>
            <p>
              To make our vision come true, we need to do some mission first.
              From this mission, we hope that we can take step by step process
              to reach our dream. Here is our mission:
            </p>

            <p>1. Make our customer happy</p>
            <p>2. Make our staff happy</p>
            <p>3. Make our name famous</p>
            <p>4. Do not do any kind of crime</p>
            <p>5. Do not disgrace our rule</p>
          </div>
          <div className="col-md-3 col-lg-6 d-none d-lg-block">
            <Image
              src={Mission}
              alt="Vision"
              className="side-image img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
          </div>
        </div>

        <div className="my-3 d-flex bg-warning">
          <div className="col-md-3 col-lg-6">
            <h1 className="text-primary text-opacity-75">Executives</h1>
            <p>
              Our founder is Vincent Gunardi, he stand along his two friend as
              his co-founder, Winston Adinata and Aldo Gunaidi. After a long
              process of brainstorming and throwing a lot of wild idea, we have
              come to this stage as we successfully the wild plan that no-one
              ever expect from us.
            </p>

            <p>
              After a long process, we have come to a decision that we will aim
              to make this business a successfull one for our fate too. It is
              not an easy path to take, but we will try our best to do that.
              Good Luck, and adios!
            </p>
          </div>
          <div className="col-md-3 col-lg-6 d-none d-lg-block">
            <Image
              src={Founder}
              alt="Vision"
              className="side-image img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
