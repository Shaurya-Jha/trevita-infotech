import {Row, Col, Container, Card} from 'react-bootstrap';
import img1 from '../../assets/imgs/img1.jpg'

export default function CustomCard() {
  return (
    <div>
        <Card className='my-3'>
            <Card.Img className='brightness-50' src={img1} />

            <Card.ImgOverlay className='flex items-end justify-center'>
                <div className='bg-blue-700 rounded-full py-2 px-6 text-white text-center'>
                    <Card.Title>Web development</Card.Title>
                </div>
            </Card.ImgOverlay>
        </Card>
    </div>
  )
}
