import { Container, Row, Col } from "react-bootstrap";
import DataSection from "./DataSection";
import CustomCard from "./CustomCard";
import { useEffect, useState } from "react";
import BallLoader from "../BallLoader";

const BrandingDesignInfo = () => {
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 3000);
  //   }, [loading]);

  //   if (loading) {
  //     return <BallLoader />;
  //   }

  return (
    <div>
      
      <Container>
        <div>
          <DataSection
            data={
              "Welcome to the intersection of creativity and brand identity! At Trevita Infotech, we specialize in crafting compelling and distinctive branding and design solutions that set your business apart in the crowded digital landscape. Our strategic approach combines artistic flair with market insights to create visually stunning and memorable designs that resonate with your audience. Explore the world of transformative branding and design with us, where your vision meets our expertise."
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
            title="Branding Strategy"
            data="Our branding strategy is rooted in understanding your business at its core. We work collaboratively to define your brand identity, values, and unique selling propositions, setting the foundation for a powerful and resonant brand."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Positioning"
                data="Crafting a distinctive positioning strategy that sets your brand apart from competitors and resonates with your target audience."
              />
            </Col>

            <Col>
              <CustomCard
                title="Visual Identity"
                data="Creating a cohesive visual identity that includes logo design, colour palettes, typography, and imagery to establish a consistent and recognizable brand presence."
              />
            </Col>

            <Col>
              <CustomCard
                title="Brand Discovery"
                data="Uncovering the essence of your brand through in-depth research and analysis, identifying key brand attributes and values."
              />
            </Col>
          </Row>
        </div>

        {/* web development section */}
        <div>
          <DataSection
            title="Logo Design"
            data="Your logo is the face of your brand. Our logo design process is meticulous, ensuring that your logo not only represents your business but also leaves a lasting impression on your audience."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Concept Development"
                data="Brainstorming and exploring various concepts to find a logo that encapsulates your brand's personality and values."
              />
            </Col>

            <Col>
              <CustomCard
                title="Versatility"
                data="Designing logos that are versatile and effective across different platforms and mediums."
              />
            </Col>

            <Col>
              <CustomCard
                title="Brand Storytelling"
                data="Infusing your brand's story and values into the logo to create a meaningful and memorable visual representation."
              />
            </Col>
          </Row>
        </div>

        {/* e commerce section */}
        <div>
          <DataSection
            title="Graphic Design"
            data="Our graphic design services extend beyond logos, encompassing a wide range of visual assets that strengthen your brand presence across various touchpoints."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Collateral Design"
                data="Crafting visually appealing and cohesive collateral, including business cards, brochures, and stationery, that align with your brand identity"
              />
            </Col>

            <Col>
              <CustomCard
                title="Digital Assets"
                data="Designing captivating graphics for digital platforms, social media, and online marketing campaigns."
              />
            </Col>

            <Col>
              <CustomCard
                title="Illustrations and Infographics"
                data="Creating custom illustrations and infographics that communicate complex information in an engaging and visually appealing manner."
              />
            </Col>
          </Row>
        </div>

        {/* cms section */}
        <div>
          <DataSection
            title="Website Design"
            data="Your website is often the first interaction customers have with your brand. Our website design services focus on creating user-friendly and visually captivating websites that leave a lasting impression."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Responsive Design"
                data="Ensuring your website looks and functions seamlessly across various devices, providing a consistent user experience."
              />
            </Col>

            <Col>
              <CustomCard
                title="User Experience (UX) Design"
                data="Prioritizing intuitive navigation and user-centric design to enhance overall user satisfaction."
              />
            </Col>

            <Col>
              <CustomCard
                title="Branding Integration"
                data="Infusing your brand elements into the website design for a cohesive online presence."
              />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection
            title="Brand Guidelines"
            data="Consistency is key to a strong brand. We develop comprehensive brand guidelines that serve as a roadmap for maintaining a consistent brand identity across all channels."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Usage Rules"
                data="Clearly defining how brand elements should be used across different mediums and applications."
              />
            </Col>

            <Col>
              <CustomCard
                title="Tone of Voice"
                data="Establishing guidelines for the brand's tone of voice, ensuring a consistent and cohesive communication style."
              />
            </Col>

            <Col>
              <CustomCard
                title="Brand Assets"
                data="Providing a centralized repository of brand assets and resources for internal and external use."
              />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection data="At Trevita Infotech, we believe in the transformative power of design and branding. Let us be your creative partners in shaping a brand that not only stands out but resonates with your audience on a profound level. Elevate your brand with us, where creativity meets strategy, and design becomes a powerful tool for business success." />
        </div>
      </Container>
    </div>
  );
};

export default BrandingDesignInfo;
