import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import services from "../../assets/illustrations/services.png";

function CustomCard({ title }) {
  return (
    <Card className="px-2 py-4 mx-2 my-4 !rounded-3xl items-center hover:shadow hover:shadow-blue-700/70">
      <Card.Img src={services} />

      <Card.Body>
        <Card.Title className="my-4">{title}</Card.Title>
        <Link to="/moreinfo">
            <Button className="px-3 py-2 mb-2 hover:scale-105 ease-in-out duration-300">Read more...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default function Services() {
  return (
    <div className="py-4">
      <Container>
        <Row>
          <Col className="flex flex-col justify-center items-center">
            <h2>Our Services</h2>
            <Image
              src={services}
              alt="services"
              className="h-[350px] w-[350px]"
            />
          </Col>
        </Row>

        <Row sm={2} md={4}>
          <Col>
            <CustomCard title="Web development" />
          </Col>

          <Col>
            <CustomCard title="Web development" />
          </Col>

          <Col>
            <CustomCard title="Web development" />
          </Col>

          <Col>
            <CustomCard title="Web development" />
          </Col>

          <Col>
            <CustomCard title="Web development" />
          </Col>

          <Col>
            <CustomCard title="Web development" />
          </Col>

          <Col>
            <CustomCard title="Web development" />
          </Col>

          <Col>
            <CustomCard title="Web development" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
