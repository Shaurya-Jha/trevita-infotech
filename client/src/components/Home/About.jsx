import { Container, Row, Col, Image } from "react-bootstrap";
import about from "../../assets/illustrations/about.png";

export default function About() {
  return (
    <div className="bg-blue-800 text-white py-4 my-4">
      <Container>
        <div className="flex justify-center">
          <h2 className="capitalize">about us</h2>
        </div>

        <Row>
          <Col sm={12} md={6} className="flex items-center justify-center py-4 mb-4">
            <div>
              <p>
                Trevita InfoTech transforms innovative ideas into reality. It is
                fueled by technological innovation.
              </p>
            </div>
          </Col>

          <Col sm={0} md={6} className="flex justify-center items-center py-4 mb-4">
            <div>
                <Image src={about} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
