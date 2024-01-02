import {useRouteError, Link} from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';
import error404 from './assets/illustrations/error404.jpg'
import sad from './assets/svg/sad.png'

export default function ErrorPage() {

    const error = useRouteError();
    console.log(error);

  return (
    <div className="h-[100vh] flex justify-center items-center">
        <Container>
            <Row>
                <Col sm={6} md={6} className='flex flex-col justify-center items-center'>
                    <h1>OOOPS!!!</h1>

                    <div className='flex'>
                        <p>Sorry, an unexpected error has occured.</p>
                        <Image src={sad} className='h-[25px] ml-3' />
                    </div>

                    <div>
                        <p>{error.statusText || error.message}</p>
                    </div>

                    <div className='mt-4'>
                        <Link className='no-underline' to='/'>
                            <p className='text-blue-950'>Go to HOME</p>
                        </Link>
                    </div>
                </Col>

                <Col sm={6} md={6}>
                    <div>
                        <Image fluid src={error404} alt='image not found' />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
