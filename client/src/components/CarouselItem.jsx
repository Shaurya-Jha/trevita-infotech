import {Carousel} from 'react-bootstrap'

export default function CarouselItem({image, title}) {
  return (
    <Carousel>
        <Carousel.Item>
            <img src={image} alt={`${image} not found`} />

            <Carousel.Caption>
                <h3>{title}</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
