import {Container, Row, Col} from 'react-bootstrap';
import WorkCard from './WorkCard';

export default function Services({serviceName}) {
  return (
    <div>
        <Container>
            <div className='flex justify-center'>
                <h3>{serviceName}</h3>
            </div>

            <Row>
                <Col>
                    <WorkCard name='website name' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
