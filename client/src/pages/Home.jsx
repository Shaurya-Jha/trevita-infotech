import CarouselItem from "../components/CarouselItem";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Hero from '../components/Hero';
import img1 from '../assets/imgs/img1.jpg';
import img2 from '../assets/imgs/img2.jpg';
import {animated, useSpring} from '@react-spring/web';

export default function Home() {

  const springs = useSpring({
    from: {
      y: -1000
    },
    to:{
      y:0
    }
  })

  return (
    <animated.div style={{...springs}}>
        {/* carousel */}
        <div>
            {/* <CarouselItem title='Home' image={imageArr} /> */}
            <Hero />
        </div>

        {/* services */}
        <div>
            <Services />
        </div>

        {/* about us */}
        <div>
          <About />
        </div>
    </animated.div>
  )
}
