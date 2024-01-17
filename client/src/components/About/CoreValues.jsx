import { Container, Row, Col, Stack, Image, Card } from "react-bootstrap";
// import img1 from "../../assets/imgs/img1.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Values({ title, text, image }) {
  return (
    // <Row>
    // <Col sm={12} md={6}>
    <Card className="!bg-[--main] text-white py-4 hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 hover:shadow-xl hover:shadow-gray-600 !border-none my-4">
      <Card.Body>
        <Card.Title className="my-2"><h3>{title}</h3></Card.Title>
        <Card.Text className="my-4 py-3">{text}</Card.Text>
        <div className="flex justify-end">
            <ArrowForwardIcon />
            {/* add arrow icon */}
        </div>
      </Card.Body>
    </Card>
    // </Col>
    // {/* </Row> */}
  );
}

export default function CoreValues() {
  return (
    <div className="h-full my-4 py-4">
      {/* <Container>
            <div>
                <h2 className='capitalize'>core values</h2>
            </div>

            <Row className="my-4 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl hover:scale-105 ease-in-out duration-300"> */}
      {/* image section */}
      {/* <Col sm={0} md={6} className='!px-0'>
                    <img src={img1} alt="" className='rounded-3xl' />
                </Col> */}

      {/* content section */}
      {/* <Col sm={12} md={6} className='my-auto text-white'>
                    <Stack gap={4}>
                        <h3>title</h3>
                        <p>text</p>
                    </Stack>
                </Col>
            </Row>
        </Container> */}

      <Container>
        <div className="flex justify-center">
          <h2 className="capitalize">core values</h2>
        </div>

        <Row>
          <Col sm={12} md={4} >
            <Values
              title="Excellence"
              text="We strive for excellence in everything we do, from the quality of our solutions to the level of service we provide."
              image={'img1'}
            />
          </Col>

          <Col sm={12} md={4}>
            <Values
              title="Integrity"
              text="We conduct business with the utmost integrity, transparency, and honesty, building lasting relationships with our clients and partners."
              image={'img1'}
            />
          </Col>

          <Col sm={12} md={4}>
            <Values
              title="Collaboration"
              text="We believe in the power of collaboration, both internally and with our clients. Together, we achieve more."
              image={'img1'}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
