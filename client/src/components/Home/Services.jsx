import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import services from "../../assets/illustrations/services.png";
// import {AnimationOnScroll} from 'react-animation-on-scroll'
// import "animate.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

function CustomCard({ title }) {

  // aos properties implementation
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing:'ease-in-out',
      offset:250
    })
  },[])

  return (
    // <AnimationOnScroll animateIn="animate__slideInDown" delay={0.8} animateOnce={true}>
      <Card className="py-4 mx-2 my-4 !rounded-3xl items-center hover:shadow hover:shadow-gray-700/50" data-aos="fade-up">
        <Card.Img src={'services'} />

        <Card.Body>
          <Card.Title className="my-4 text-center !text-blue-800">
            {title}
          </Card.Title>
        </Card.Body>
      </Card>
      // </AnimationOnScroll>
  );
}

export default function Services() {
  return (
    <div className="h-full my-4 sm:h-full">

      <Container className="">
        <Row className="py-4">
          <Col className="flex flex-col justify-center items-center">
            <h2>Our Services</h2>
            {/* <Image
              src={services}
              alt="services"
              className="h-[350px] w-[350px]"
            /> */}
          </Col>
        </Row>

        <Row sm={2} md={4} className="flex my-3 justify-center">
          <Col>
            <CustomCard title="Software Development" />
          </Col>

          <Col>
            <CustomCard title="Branding & Designing" />
          </Col>

          <Col>
            <CustomCard title="Animation" />
          </Col>

          <Col>
            <CustomCard title="Digital Marketing" />
          </Col>

          <Col>
            <CustomCard title="Photo Editing & Product Shoot" />
          </Col>

          <Col>
            <CustomCard title="Website Design & Development" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
