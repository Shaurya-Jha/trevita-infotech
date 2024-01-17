import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServiceCards({url,title}) {
  // animation properties
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });

  return (
    <div>
      <Card
        data-aos="fade-down"
        className="my-4 flex justify-center w-64 !border-none !rounded-3xl"
      >
        <Link to={`${url}`}>
          <Card.Img className="!rounded-3xl" src={'img1'} />
        </Link>

        <Card.Body className="flex flex-col items-center mb-4">
          <Card.Title className="capitalize no-underline">
            <Link className="capitalize no-underline text-black" to={`${url}`}>
              {title}
            </Link>
            {/* {title} */}
          </Card.Title>
          {/* <Link to={`${url}`}>
                      <Button>Know more</Button>
                    </Link> */}
        </Card.Body>
      </Card>
    </div>
  );
}
