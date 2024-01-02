import {Container, Col, Row} from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="py-4">
        <Container className="py-4 mt-4">
            <Row>
                <Col sm={12} md={6}>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='capitalize'>we make your <span className='text-blue-600'>brand more</span> creative & innovative</h2>

                        <p>Trevita Infotech is digital service agency that specializes in creating innovative and effective digital solutions.</p>

                        <div className='flex w-full mt-6'>
                            <button className='capitalize bg-blue-700 text-white py-2 px-6'>our services</button>

                            <button className='capitalize border-1 border-blue-700 py-2 px-6 ml-3'>about us</button>
                        </div>
                    </div>
                </Col>

                <Col sm={0} md={6}></Col>
            </Row>
        </Container>
    </div>
  )
}
