// import {Link} from 'react-router-dom';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
// import img1 from '../assets/imgs/img1.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Advertisement() {
  // animation properties
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });

  return (
    <div className="h-full my-4 py-4">
      {/* <Container>
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
        </Container> */}

      <Container className="my-4 py-4">
        <Row className="my-4 py-4">
          <Col
            data-aos="fade-up"
            className="flex justify-center items-center"
            sm={12}
            md={6}
          >
            <div className="flex flex-col items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                asperiores vitae iusto officia dolor expedita totam
                necessitatibus. Minus unde dignissimos consequatur officiis
                nesciunt nobis repellat, exercitationem explicabo maiores.
                Consequatur, tempore?
              </p>

              {/* <Button className="capitalize py-2 px-4 mt-3 
                        !rounded-3xl">let's talk</Button> */}
              <button
                data-aos="fade-up"
                data-aos-delay="150"
                type="button"
                class="text-white bg-[--main] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 capitalize"
              >
                let's talk
              </button>
            </div>
          </Col>

          <Col data-aos="fade-up" className="!flex justify-center" md={6}>
            <div className="border-black w-[300px] sm:hidden md:block">
              <Image src={"img1"} alt="advertisement-img" fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
