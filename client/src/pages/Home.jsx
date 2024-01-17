import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import Advertisement from "../components/Advertisement";

export default function Home() {
  return (
    <div>
      {/* hero section */}
        <Hero />

      {/* services */}
        <Services />

      {/* about us section */}
        <About />

      {/* advertisement */}
        <Advertisement />
    </div>
  );
}
