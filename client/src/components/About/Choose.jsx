import { Container, Row, Col, Card } from "react-bootstrap";
// import services from "../../assets/illustrations/services.png";

// images import
// import expertise from "../../assets/illustrations/expertise.png";
// import client from "../../assets/illustrations/client.png";
// import innovation from "../../assets/illustrations/innovation.png";

function CustomCard({ title, text, image }) {
  return (
    <Card className="my-4 !rounded-3xl !bg-[--main] text-white !border-none hover:scale-105 ease-in-out duration-500 hover:shadow-xl hover:shadow-blue-400 w-80">
      {/* <div className="h-[500px] aspect-auto">
        <img className="max-w-sm h-auto" src={'image'} />
      </div> */}
      <img className="h-auto max-w-full" alt='image description' src={image} />

      <Card.Body className="px-4">
        <Card.Title className="my-2">{title}</Card.Title>
        <Card.Text className="my-2">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function Choose() {
  return (
    <div className="h-full">
      <Container className="my-4 py-4">
        <div className="flex justify-center">
          <h2 className="capitalize">why choose us?</h2>
        </div>

        <Row className="flex justify-center">
          <Col sm={12} md={6} className="flex justify-center">
            <CustomCard
              title="Expertise"
              text="Our team comprises highly skilled professionals with a wealth of experience in diverse IT domains, ensuring that we deliver solutions that meet the highest industry standards."
              image={'expertise'}
            />
          </Col>

          <Col sm={12} md={6} className="flex justify-center">
            <CustomCard
              title="Client-Centric Approach"
              text="We prioritize understanding our clients unique challenges and goals. This client-centric approach allows us to tailor solutions that address specific needs and deliver maximum value."
              image={'client'}
            />
          </Col>

          <Col sm={12} md={6} className="flex justify-center">
            <CustomCard
              title="Innovation"
              text="In an ever-evolving technological landscape, we stay at the forefront of innovation. Our commitment to research and development ensures that our clients benefit from the latest advancements in technology."
              image={'innovation'}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
