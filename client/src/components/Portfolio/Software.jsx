import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "./WorkCard";

export default function Software({ serviceName }) {
  return (
    <div className="my-[100px]">
      <Container>
        <div className="flex justify-center">
          <h3 className="capitalize">{serviceName}</h3>
        </div>

        <Row>
        <Col sm={6} md={3}>
                    <WorkCard name='website name' />
                </Col>

                <Col sm={6} md={3}>
                    <WorkCard name='website name' />
                </Col>

                <Col sm={6} md={3}>
                    <WorkCard name='website name' />
                </Col>

                <Col sm={6} md={3}>
                    <WorkCard name='website name' />
                </Col>
        </Row>
      </Container>
    </div>
  );
}
