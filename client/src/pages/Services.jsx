import React from "react";
import Advertisement from "../components/Advertisement";
import Hero from "../components/Hero";
import OurServices from "../components/Services/OurServices";

export default function Services() {
  return (
    <div>
      {/* hero section */}
      {/* <div> */}
      <Hero />
      {/* </div> */}

      {/* our services section */}
      {/* <div> */}
      <OurServices />
      {/* </div> */}

      {/* advertisement section */}
      {/* <div> */}
      <Advertisement />
      {/* </div> */}
    </div>
  );
}
