import { Container, Row, Col } from "react-bootstrap";
import DataSection from "./DataSection";
import CustomCard from "./CustomCard";

function WebsiteInfo() {
  return (
    <div>
        <div>
            <h1>Website Design & Development</h1>
        </div>
      <Container>
        <div>
          <DataSection
            data={
              "Welcome to our digital realm where creativity meets functionality, and innovation blends seamlessly with user experience. Our web designing and development services are crafted to transform your online presence, ensuring that your digital footprint reflects the essence of your brand and engages your audience effectively."
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
            title="web design"
            data="Our web design process begins with a deep understanding of your brand, objectives, and target audience. Our team of skilled designers combines artistic flair with user-centric design principles to create visually stunning and intuitive websites. We focus on responsive design, ensuring that your site looks and performs flawlessly across devices, providing a seamless user experience."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Responsive Design" data="A website that adapts to various screen sizes, ensuring a consistent and enjoyable experience on desktops, tablets, and smartphones." />
            </Col>

            <Col>
              <CustomCard title="User-Centric Approach" data="Designs that prioritize user experience, making navigation intuitive and content easily accessible." />
            </Col>

            <Col>
              <CustomCard title="Branding Integration" data="We seamlessly integrate your brand elements, colors, and messaging to create a cohesive and memorable online identity." />
            </Col>
          </Row>
        </div>

        {/* web development section */}
        <div>
          <DataSection
            title="web development"
            data="Our web development services bring your vision to life, employing cutting-edge technologies to build robust, scalable, and feature-rich websites. Whether it's a dynamic corporate site, an e-commerce platform, or a custom web application, we have the expertise to make it happen."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Custom Development" data="Tailored solutions that cater to your unique requirements, ensuring that your website aligns perfectly with your business goals." />
            </Col>

            <Col>
              <CustomCard title="Scalability" data="Future-proof development that allows your website to grow alongside your business, accommodating increased traffic and evolving functionalities." />
            </Col>

            <Col>
              <CustomCard title="Performance Optimization" data="We optimize your website for speed, ensuring quick loading times and a smooth user experience." />
            </Col>
          </Row>
        </div>

        {/* e commerce section */}
        <div>
          <DataSection
            title="e-commerce solutions"
            data="For businesses looking to thrive in the digital marketplace, our e-commerce solutions provide a robust foundation. From secure payment gateways to intuitive product catalogs, we create online stores that captivate customers and drive conversions."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Secure Transactions" data="Implementing top-notch security measures to safeguard customer data and ensure secure transactions." />
            </Col>

            <Col>
              <CustomCard title="User-Friendly Shopping" data="Intuitive navigation and a seamless checkout process to enhance the overall shopping experience." />
            </Col>
          </Row>
        </div>

        {/* cms section */}
        <div>
          <DataSection
            title="content management systems"
            data="Take control of your content with our user-friendly CMS solutions. Update, modify, and add content effortlessly, empowering you to keep your website dynamic and relevant."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Easy Content Updates" data="A user-friendly CMS that allows you to manage and update your website content without technical expertise." />
            </Col>

            <Col>
              <CustomCard title="Flexibility" data="Adapt your website to changing needs by easily adding new pages, images, and multimedia elements." />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection data="At Trevita Infotech, we believe in the power of a compelling online presence. Our web designing and development services are not just about creating websites; they are about building digital experiences that leave a lasting impression. Let's embark on a journey to elevate your brand in the digital landscape." />
        </div>
      </Container>
    </div>
  );
}

export default WebsiteInfo;
