import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import img1 from '../assets/imgs/img1.jpg'

export default function Advertisement() {
  return (
    <div className='bg-blue-700 py-4'>
        <Container>
            <Row>
                <Col className="flex justify-center">
                    <div className='text-white flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non recusandae voluptatem omnis eum culpa tempora nisi nostrum sapiente sed ullam, dolore id mollitia odio voluptatum hic enim quibusdam a rem!</p>
                    </div>
                </Col>

                <Col>
                    <div className='flex flex-col items-center justify-center'>
                        <Image  className='rounded-tr-3xl rounded-bl-3xl' src={img1} />
                        <Link to='/contact'><Button className='mt-3'>Let's Talk</Button></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
