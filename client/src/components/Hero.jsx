import { Container, Col, Row, Image } from "react-bootstrap";
// import img1 from "../assets/imgs/img1.jpg";
// import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  // aos properties implementation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
    });
  });

  return (
    <div className="h-[95vh] flex items-center">
      <Container className="!p-0">
        <Row>
          <Col
            data-aos="fade-up"
            sm={12}
            md={6}
            className="flex items-center"
          >
            <div className="flex flex-col justify-center items-center text-main">
              <h2 className="capitalize">
                we make your <span className="text-blue-600">brand more</span>{" "}
                creative & innovative
              </h2>

              <p>
                Trevita Infotech is digital service agency that specializes in
                creating innovative and effective digital solutions.
              </p>

              <div className="flex w-full mt-6">
                {/* <button data-aos="fade-up" data-aos-delay="200" className="capitalize bg-blue-700 text-white py-2 px-6 rounded-3xl hover:bg-white hover:text-blue-800 border-1 border-blue-800">
                  our services
                </button> */}

                {/* new button design */}
                <button data-aos="fade-up" data-aos-delay="200"
                  type="button"
                  class="text-white bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 capitalize"
                >
                  our services
                </button>

                <button data-aos="fade-up" data-aos-delay="400"
                  type="button"
                  class="text-white bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 capitalize"
                >
                  about us
                </button>
              </div>
            </div>
          </Col>
          {/* <Col sm={12} md={6}>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='capitalize'>we make your <span className='text-blue-600'>brand more</span> creative & innovative</h2>

                        <p>Trevita Infotech is digital service agency that specializes in creating innovative and effective digital solutions.</p>

                        <div className='flex w-full mt-6'>
                            <button className='capitalize bg-blue-700 text-white py-2 px-6'>our services</button>

                            <button className='capitalize border-1 border-blue-700 py-2 px-6 ml-3'>about us</button>
                        </div>
                    </div>
                </Col> */}

          {/* <Col className="sm:hidden md:block" md={6}>
            <div className="border-2 flex flex-col items-center justify-center">
              <img
                src={img1}
                className="w-[80%] rounded-tl-[80px] rounded-tr-[80px]"
                alt="image not found"
              />
            </div>
          </Col> */}

          <Col
            data-aos="fade-left"
            className="!flex justify-center items-center sm:hidden md:block"
          >
            <div className="sm:hidden md:block">
              <Image src={""} alt="hero-image" fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
