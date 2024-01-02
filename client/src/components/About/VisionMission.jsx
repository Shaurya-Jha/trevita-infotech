import {Container, Row, Col, Stack} from 'react-bootstrap';
import img1 from "../../assets/imgs/img2.jpg";

export default function VisionMission() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Stack gap={2} className='content-center'>
                        <img src={img1} className='h-[250px] w-[250px]' />

                        <h3>title</h3>
                        <p>text</p>
                    </Stack>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
