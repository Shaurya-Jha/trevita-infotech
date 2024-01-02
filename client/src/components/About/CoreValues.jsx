import {Container, Row, Col, Stack} from 'react-bootstrap';
import img1 from '../../assets/imgs/img1.jpg';

export default function CoreValues() {
  return (
    <div>
        <Container>
            <div>
                <h2 className='capitalize'>core values</h2>
            </div>

            <Row className="my-4 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl hover:scale-105 ease-in-out duration-300">
                {/* image section */}
                <Col sm={0} md={6} className='!px-0'>
                    <img src={img1} alt="" className='rounded-3xl' />
                </Col>

                {/* content section */}
                <Col sm={12} md={6} className='my-auto text-white'>
                    <Stack gap={4}>
                        <h3>title</h3>
                        <p>text</p>
                    </Stack>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
