import { Container, Row, Col, Image } from "react-bootstrap";
// import about from "../../assets/illustrations/about.png";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function About() {
  // aos properties implementation
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing:'ease-out',
      // offset:250
    })
  },[])

  return (
    // <div className="bg-blue-800 text-white h-full border-2 my-4 py-[80px]">
    <div className="bg-[--main] text-white h-full my-4 py-[80px]">
      {" "}
      <div className="flex justify-center">
        <h2 className="capitalize">about us</h2>
      </div>
      {/* <Container>
        <div className="flex justify-center">
          <h2 className="capitalize">about us</h2>
        </div>

        <Row>
          <Col sm={12} md={6} className="flex items-center justify-center py-4 mb-4">
            <div>
              <p>
                Trevita InfoTech transforms innovative ideas into reality. It is
                fueled by technological innovation.
              </p>
            </div>
          </Col>

          <Col sm={0} md={6} className="flex justify-center items-center py-4 mb-4">
            <div>
                <Image src={about} />
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container className="mt-4 pt-4">
        {/* <Row className="pb-2">
          <Col className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <p>
                Trevita InfoTech transforms innovative ideas into reality. It is
                fueled by technological innovation.
              </p>
            </div>
          </Col>

          <Col>
            <div className="flex justify-center sm:hidden md:block">
              <Image src={about} className="object-contain" />
            </div>
          </Col>
        </Row> */}

        <Row className="my-4 py-4">
          <Col sm={12} md={6} data-aos="fade-up" className="flex justify-center items-center">
            <div className="text-white flex flex-col items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                asperiores vitae iusto officia dolor expedita totam
                necessitatibus. Minus unde dignissimos consequatur officiis
                nesciunt nobis repellat, exercitationem explicabo maiores.
                Consequatur, tempore?
              </p>
            </div>
          </Col>

          <Col md={6} data-aos="fade-up" className="!flex justify-center">
            <div className="w-[300px] sm:hidden md:block">
              {/* <div className="sm:hidden"> */}
              <Image src={"about"} alt="about-img" fluid />
              {/* </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
