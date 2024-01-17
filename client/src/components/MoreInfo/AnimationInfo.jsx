import { Container, Row, Col } from "react-bootstrap";
import DataSection from "./DataSection";
import CustomCard from "./CustomCard";

const AnimationInfo = () => {
  return (
    <div>
        <div>
            <h1>Animation</h1>
        </div>
      <Container>
        <div>
          <DataSection
            data={
              "Welcome to the world of dynamic storytelling and captivating visuals! At Trevita Infotech, we specialize in bringing ideas to life through immersive animations that engage, inform, and entertain. Our animation services combine creativity, technology, and storytelling to elevate your brand and convey messages in a visually compelling manner. Explore the possibilities with our animation services, where every frame is a canvas for innovation."
            }
          />

          {/* card section */}
          {/* <Row>
            <Col sm={12} md={4}>
              <CustomCard title="title" data="data" />
            </Col>

            <Col sm={12} md={4}>
              <CustomCard title="title" data="data" />
            </Col>

            <Col sm={12} md={4}>
              <CustomCard title="title" data="data" />
            </Col>
          </Row> */}
        </div>

        <div>
          {/* web design section */}
          <DataSection
            title="Explainer Videos"
            data="Transform complex ideas into easily digestible content with our engaging explainer videos. Whether it's introducing a product, explaining a process, or simplifying a concept, our animations make information accessible and enjoyable.
            "
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Clear Communication" data="Convey your message concisely and effectively through animated visuals and narration." />
            </Col>

            <Col>
              <CustomCard title="Brand Integration" data="Infuse your brand personality into the animation to create a cohesive and memorable experience." />
            </Col>

            <Col>
              <CustomCard title="Customizable Styles" data="Choose from a variety of animation styles, from 2D character animations to sleek motion graphics, to suit your brand aesthetic." />
            </Col>
          </Row>
        </div>

        {/* web development section */}
        <div>
          <DataSection
            title="Product Animations"
            data="Showcase your products in a dynamic and visually appealing way with our product animations. Highlight features, demonstrate functionality, and create an immersive experience for your audience."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Detailed Visualization" data="Bring product details to life with 3D animations, close-ups, and dynamic camera movements." />
            </Col>

            <Col>
              <CustomCard title="Enhanced Understanding" data="Help customers visualize how your product works or benefits them through realistic and engaging animations." />
            </Col>

            <Col>
              <CustomCard title="Integration with Marketing" data="Utilize product animations across marketing channels, from websites to social media, for maximum impact." />
            </Col>
          </Row>
        </div>

        {/* e commerce section */}
        <div>
          <DataSection
            title="Motion Graphics"
            data="Add flair and visual interest to your digital content with motion graphics. From animated logos to eye-catching transitions, our motion graphics elevate your brand and create a memorable visual identity."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Branding Elements" data="Integrate animated brand elements seamlessly into your digital content." />
            </Col>

            <Col>
              <CustomCard title="Engaging Transitions" data="Capture attention with smooth transitions and animated elements that enhance the overall user experience." />
            </Col>

            <Col>
                <CustomCard title="Social Media Presence" data="Elevate your social media presence with visually striking and shareable motion graphics." />
            </Col>
          </Row>
        </div>

        {/* cms section */}
        <div>
          <DataSection
            title="Character Animation"
            data="Give your brand a personality with character animations. Whether it's animated mascots, spokespersons, or characters that tell a story, our animations breathe life into your brand."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Emotional Connection" data="Build an emotional connection with your audience through relatable and charming characters." />
            </Col>

            <Col>
              <CustomCard title="Storytelling" data="Use character animations to narrate stories, convey messages, and create memorable brand experiences." />
            </Col>

            <Col>
              <CustomCard title="Versatility" data="Characters can be utilized across various platforms, from websites to marketing campaigns, for consistent brand representation." />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection
            title="Interactive Animations"
            data="Enhance user engagement with interactive animations that invite users to participate and explore. From interactive infographics to animated web elements, our animations make your digital presence dynamic."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="User Engagement" data="Capture and maintain user interest through interactive elements that respond to user actions." />
            </Col>

            <Col>
              <CustomCard title="Information Retention" data="Increase information retention by allowing users to interact with and explore animated content." />
            </Col>

            <Col>
              <CustomCard title="Website Enhancement" data="Elevate your website with interactive animations that create a modern and engaging user interface." />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection
            title="Virtual and Augmented Reality (VR/AR) Animations"
            data="Immerse your audience in a virtual world or enhance their real-world experiences with VR and AR animations. Our expertise extends to creating immersive content that sets your brand apart."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Interactive Experiences" data="Create interactive and immersive experiences for users through VR and AR animations." />
            </Col>

            <Col>
              <CustomCard title="Product Visualization" data="Allow users to virtually explore and interact with your products in a 3D space." />
            </Col>

            <Col>
              <CustomCard title="Innovative Marketing" data="Utilize VR and AR animations for innovative marketing campaigns, events, and promotions." />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection data="At Trevita Infotech, we believe in the power of animation to convey messages, tell stories, and elevate brand experiences. Let our creative animators and storytellers be your partners in bringing your ideas to life. Join us on a journey where imagination meets technology, and every frame tells a story of innovation and creativity. Elevate your brand with our animation services – where visuals come to life!" />
        </div>
      </Container>
    </div>
  )
}

export default AnimationInfo