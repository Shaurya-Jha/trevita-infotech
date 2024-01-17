import Choose from '../components/About/Choose'
import CoreValues from "../components/About/CoreValues";
import VisionMission from "../components/About/VisionMission";
import Advertisement from "../components/Advertisement";
import Hero from "../components/Hero";

// code splitting


// const Choose = lazy(() => import("../components/About/Choose"));

export default function About() {
  return (
    <div>
      {/* hero section */}
      {/* <div> */}
      <Hero />
      {/* </div> */}

      {/* why choose us section */}
      {/* <div> */}
      {/* <Suspense */}
        {/* // fallback={<Loading />}> */}
        <Choose />
      {/* </Suspense> */}
      {/* </div> */}

      {/* core values section */}
      {/* <div> */}
      <CoreValues />
      {/* </div> */}

      {/* vision and mission */}
      {/* <div> */}
      <VisionMission />
      {/* </div> */}

      {/* advertisement section */}
      {/* <div> */}
      <Advertisement />
      {/* </div> */}
    </div>
  );
}
