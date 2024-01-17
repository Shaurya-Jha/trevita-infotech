import { Container, Row, Col, Stack, Card } from "react-bootstrap";
// import img1 from "../../assets/imgs/img2.jpg";

function Children({ title, text, image }) {
  return (
    // <Card className="w-1/5 !rounded-[120px] pb-[120px] my-4">
    //   <div className="rounded-[70px] bg-blue-700">
    //     {/* <Card.Img src={image} className="object-cover" /> */}

    //     <img className="object-contain rounded-[70px] p-2" src={image} />
    //   </div>
    //   <Card.Body className="mt-3 flex flex-col justify-center items-center">
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{text}</Card.Text>
    //   </Card.Body>
    // </Card>

    <Card className="!bg-[--main] text-white !border-none hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 hover:shadow-xl hover:shadow-gray-600 w-[24rem] !rounded-2xl my-4">
        <Card.Img src={'img1'} className="!rounded-none !rounded-t-2xl h-[250px]" />
      <Card.Body>
        <Card.Title className="my-2 capitalize">
          <h3>{title}</h3>
        </Card.Title>
        <Card.Text className="my-4 py-3">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function VisionMission() {
  return (
    <div className="h-full my-4 py-4">

    <div className="flex justify-center pb-4">
        <h2 className="capitalize">vision and mission</h2>
    </div>

      <Container>
        {/* <Row>
                <Col>
                    <Stack gap={2} className='content-center'>
                        <img src={img1} className='h-[250px] w-[250px]' />

                        <h3>title</h3>
                        <p>text</p>
                    </Stack>
                </Col>
            </Row> */}

        <Row className="">
          <Col sm={12} md={6} className="flex justify-center">
            <Children title="Vision" text="At Trevita Infotech, we envision a future where the transformative power of technology creates seamless connections, fosters innovation, and propels organizations toward unparalleled success. Our vision is to be at the forefront of this evolution, driving positive change and shaping a digital landscape with limitless possibilities." image={'img1'} />
          </Col>

          <Col sm={12} md={6} className="flex justify-center">
            <Children title="Mission" text="At Trevita Infotech, our mission is to deliver innovative and reliable IT solutions that enable our clients to stay ahead in the fast-paced world of technology. We strive to foster a culture of continuous improvement, creativity, and excellence, ensuring our clients achieve their business objectives with confidence." image={'img1'} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
