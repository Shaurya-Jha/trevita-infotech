import { Container, Row, Col } from "react-bootstrap";
import DataSection from "./DataSection";
import CustomCard from "./CustomCard";

function SoftwareInfo() {
  return (
    <div>
        <div>
            <h1>Software Development</h1>
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
            title="Custom Software Development"
            data="We specialize in developing tailored software solutions designed to address the specific challenges and objectives of your business. Our team of experienced developers leverages the latest technologies to create scalable, secure, and high-performance applications.
            "
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Bespoke Solutions" data="Custom software tailored to meet the unique requirements and objectives of your business, ensuring optimal functionality and efficiency." />
            </Col>

            <Col>
              <CustomCard title="Scalable Architecture" data="Building software with a scalable architecture to accommodate future growth and evolving business needs." />
            </Col>

            <Col>
              <CustomCard title="Technology Expertise" data="Utilizing a wide array of technologies and frameworks to create cutting-edge and future-proof software solutions." />
            </Col>
          </Row>
        </div>

        {/* web development section */}
        <div>
          <DataSection
            title="Web Application Development"
            data="Empower your business with dynamic and responsive web applications that provide seamless user experiences. Our web application development services focus on creating intuitive interfaces and robust functionality."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="User-Centric Design" data="Prioritizing user experience through intuitive interfaces, responsive design, and seamless navigation." />
            </Col>

            <Col>
              <CustomCard title="Cross-Platform Compatibility" data="Developing web applications that perform seamlessly across various browsers and devices." />
            </Col>

            <Col>
              <CustomCard title="Scalable and Secure" data="Ensuring your web application is both scalable to accommodate increasing user loads and secure to protect sensitive data." />
            </Col>
          </Row>
        </div>

        {/* e commerce section */}
        <div>
          <DataSection
            title="Mobile App Development"
            data="Reach your audience wherever they are with our mobile app development services. We specialize in creating native and cross-platform mobile applications that captivate users and drive engagement."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="iOS and Android Development" data="Crafting mobile applications for both iOS and Android platforms to reach a wider audience." />
            </Col>

            <Col>
              <CustomCard title="User-Focused Design" data="Designing mobile apps with a focus on user experience, ensuring usability and satisfaction." />
            </Col>

            <Col>
              <CustomCard title="Integration and Compatibility" data="Seamlessly integrating mobile apps with existing systems and ensuring compatibility with various devices." />
            </Col>
          </Row>
        </div>

        {/* cms section */}
        <div>
          <DataSection
            title="Database Design and Integration"
            data="Data is at the core of every successful business. Our database design and integration services ensure efficient storage, retrieval, and management of your valuable information.
            "
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Database Architecture" data="Designing robust and scalable database architectures that align with your business requirements." />
            </Col>

            <Col>
              <CustomCard title="Data Migration and Integration" data="Seamlessly migrating and integrating data from existing systems to new platforms." />
            </Col>

            <Col>
              <CustomCard title="Optimization and Performance" data="Enhancing database performance for quick and reliable access to critical information." />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection
            title="Quality Assurance (QA) and Testing"
            data="Quality is paramount in software development. Our rigorous testing processes ensure that your software is reliable, secure, and free of defects." />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Functional Testing" data="Verifying that all features and functionalities work as intended." />
            </Col>

            <Col>
              <CustomCard title="Security Testing" data="Identifying and mitigating potential security risks to protect sensitive data." />
            </Col>

            <Col>
              <CustomCard title="Performance Testing" data="Ensuring your software performs optimally under various conditions and user loads." />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection
            title="Support and Maintenance"
            data="Our commitment extends beyond development. We provide ongoing support and maintenance to ensure your software operates smoothly and stays up-to-date with the latest technologies." />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard title="Regular Updates" data="Verifying that all features and functionalities work as intended." />
            </Col>

            <Col>
              <CustomCard title="User Support" data="Addressing user queries, troubleshooting issues, and ensuring a positive user experience." />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection data="At Trevita Infotech, we don't just build software; we craft solutions that drive innovation, streamline processes, and elevate your business to new heights. Join us on the journey of digital transformation, and let's shape the future together. Your success is our mission! " />
        </div>
      </Container>
    </div>
  );
}

export default SoftwareInfo;
