import {Container, Row, Col, Card} from 'react-bootstrap';
import services from '../../assets/illustrations/services.png'

export default function Choose() {
  return (
    <div>
        <Container>
            <div className='flex justify-center'>
                <h2 className='capitalize'>why choose us?</h2>
            </div>

            <Row>
                <Col sm={12} md={12}>
                    <Card className='my-2 !rounded-3xl bg-gradient-to-r from-blue-800 to-indigo-900 text-white !outline-none !border-none hover:scale-105 ease-in-out duration-500 w-[16rem]'>
                        <div className='bg-cover'>
                            <img src={services} />
                        </div>

                        <Card.Body>
                            <Card.Title className='my-2'>title</Card.Title>
                            <Card.Text className='my-2'>text</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
