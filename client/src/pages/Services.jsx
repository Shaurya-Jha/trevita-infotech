import Hero from "../components/Hero";
import img1 from "../assets/imgs/img1.jpg";
import CustomCard from "../components/Services/CustomCard";
import { Row, Col, Container } from "react-bootstrap";
import Advertisement from "../components/Advertisement";

export default function Services() {
  return (
    <div>
      {/* hero */}
      <div>
        <Hero />
      </div>

      {/* our services */}
      <div className="my-4 pt-4">
        <div className="flex justify-center">
          <h2 className="capitalize">our services</h2>
        </div>

        <Container>
          <Row>
            <Col sm={6} md={3}>
              <CustomCard />
            </Col>

            <Col sm={6} md={3}>
              <CustomCard />
            </Col>

            <Col sm={6} md={3}>
              <CustomCard />
            </Col>

            <Col sm={6} md={3}>
              <CustomCard />
            </Col>

            <Col sm={6} md={3}>
              <CustomCard />
            </Col>

            <Col sm={6} md={3}>
              <CustomCard />
            </Col>
          </Row>
        </Container>
      </div>

      {/* advertisement */}
      <Advertisement />
    </div>
  );
}
