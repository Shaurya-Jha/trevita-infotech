import {Card} from 'react-bootstrap';
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function WorkCard({name, link, image}) {

  // apply animation properties to the page
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing:'ease-out'
    })
  })

  return (
    <Card data-aos="fade-up" className='my-4 flex justify-center items-center !rounded-3xl p-3 !bg-[--main] text-white'>
        <Card.Img src={image} alt={`${image} not found`} />

        <Card.Body>
            <Card.Title  className='capitalize'>{name}</Card.Title>
        </Card.Body>
    </Card>
  )
}
