import { Container, Row, Col } from "react-bootstrap";
import DataSection from "./DataSection";
import CustomCard from "./CustomCard";

function DigitalMarketingInfo() {
  return (
    <div>
        <div>
            <h1>digital marketing</h1>
        </div>
      <Container>
        <div>
          <DataSection
            data={
              "Welcome to the forefront of digital excellence! At Trevita Infotech, we specialize in strategic digital marketing solutions that propel your brand into the digital spotlight. Our comprehensive suite of services is designed to boost your online visibility, engage your target audience, and drive measurable results. Step into the world of our digital marketing prowess and let us elevate your brand to new heights."
            }
          />

          {/* card section */}
          {/* <Row>
            <Col>
              <CustomCard title="title" data="data" />
            </Col>

            <Col>
              <CustomCard title="title" data="data" />
            </Col>

            <Col>
              <CustomCard title="title" data="data" />
            </Col>
          </Row> */}
        </div>

        <div>
          {/* web design section */}
          <DataSection
            title="Search Engine Optimization (SEO)"
            data="Ignite your online presence with our SEO services, where we implement cutting-edge strategies to enhance your website's visibility on search engines. From keyword optimization to backlink building, we ensure your brand stands out in the competitive digital landscape."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Keyword Research" data="Identifying the most relevant and high-performing keywords to optimize your website's content for improved search engine rankings." />
            </Col>

            <Col>
              <CustomCard title="On-Page and Off-Page Optimization" data="Fine-tuning your website's structure, content, and establishing a strong off-site presence to maximize search engine visibility." />
            </Col>

            <Col>
              <CustomCard title="Analytics and Reporting" data="Transparent reporting on key performance metrics, allowing you to track the impact of our SEO efforts on your digital presence." />
            </Col>
          </Row>
        </div>

        {/* web development section */}
        <div>
          <DataSection
            title="Social Media Marketing"
            data="Harness the power of social media to connect with your audience and build a vibrant online community. Our social media marketing strategies are crafted to amplify your brand voice across popular platforms."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Content Creation and Scheduling" data="Engaging content creation tailored for each platform, strategically scheduled to reach your target audience when they're most active." />
            </Col>

            <Col>
              <CustomCard title="Community Engagement" data="Building and nurturing a community around your brand, fostering meaningful conversations and increasing brand loyalty." />
            </Col>

            <Col>
              <CustomCard title="Campaign Management" data="Strategic planning and execution of social media campaigns to drive brand awareness, engagement, and conversions." />
            </Col>
          </Row>
        </div>

        {/* e commerce section */}
        <div>
          <DataSection
            title="Pay-Per-Click (PPC) Advertising"
            data="Get instant visibility with our PPC advertising services. We create targeted campaigns that ensure your brand appears prominently in search engine results and on relevant websites, driving qualified traffic to your site."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Keyword Selection and Bid Management" data="Strategic selection of keywords and meticulous bid management to optimize your ad spend and maximize ROI." />
            </Col>

            <Col>
              <CustomCard title="Ad Creatives" data="Compelling ad creatives that capture attention and drive clicks, leading potential customers to your website." />
            </Col>

            <Col>
              <CustomCard title="Conversion Tracking" data="Implementing robust tracking mechanisms to monitor the performance of your PPC campaigns and refine strategies for better results." />
            </Col>
          </Row>
        </div>

        {/* cms section */}
        <div>
          <DataSection
            title="Email Marketing"
            data="Forge lasting connections with your audience through personalized and targeted email campaigns. Our email marketing strategies focus on delivering the right message to the right audience at the right time."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Segmentation and Personalization" data="Segregating your audience and crafting personalized email campaigns to deliver relevant content and promotions." />
            </Col>

            <Col>
              <CustomCard title="Automation" data="Implementing automated email sequences for lead nurturing, onboarding, and customer retention." />
            </Col>

            <Col>
              <CustomCard title="Analytics and Optimization" data="Analyzing email campaign performance and continuously optimizing strategies for increased engagement and conversions." />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection data="At Trevita Infotech, we don't just implement digital marketing strategies; we craft experiences that resonate with your audience, driving tangible results for your business. Join us on the journey to digital success, and let's make your brand the talk of the digital town!" />
        </div>
      </Container>
    </div>
  );
}

export default DigitalMarketingInfo;
