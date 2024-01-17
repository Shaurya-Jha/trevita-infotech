import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import Services from "../components/Portfolio/Services";
import Websites from "../components/Portfolio/Websites";
import Branding from "../components/Portfolio/Branding";
import Loading from "../components/Loading/Loading";
import { useState, useEffect, lazy, Suspense } from "react";
import Animation from "../components/Portfolio/Animation";
import DigitalMarketing from "../components/Portfolio/DigitalMarketing";
import PhotoProduct from "../components/Portfolio/PhotoProduct";
import Software from "../components/Portfolio/Software";

// const Websites = lazy(() => import("../components/Portfolio/Websites"));

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Hero />

      <Container>
        <div className="flex justify-center">
          <h2 className="capitalize">our work</h2>
        </div>
      </Container>

      <Websites serviceName="Web site" />
      {/* <Services serviceName="Web development" /> */}
      <Branding serviceName="branding" />
      <Animation serviceName='animation' />
      <DigitalMarketing serviceName="digital marketing" />
      <PhotoProduct serviceName="Photo editing & product shoot " />
      <Software serviceName="softwares" />
    </div>
  );
}
