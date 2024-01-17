import { Container, Row, Col } from "react-bootstrap";
import DataSection from "./DataSection";
import CustomCard from "./CustomCard";

function PhotoInfo() {
  return (
    <div>
      <div>
        <h1>Photo Editing & Product Shoot</h1>
      </div>
      <Container>
        <div>
          <DataSection
            data={
              "Welcome to the realm of visual excellence! At Trevita Infotech, we offer professional photo editing and product photoshoot services designed to elevate the visual representation of your brand. Our team of skilled photographers and editors collaborate to capture and enhance images that tell your brand story and showcase your products in the best possible light. Discover the artistry of our photo services, where every image is a masterpiece in the making."
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
            title="Product Photoshoot Services"
            data="Our product photoshoot services are tailored to bring out the unique features and qualities of your products, creating visually striking images that captivate your audience."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="High-Quality Photography"
                data="Utilizing top-notch equipment and creative techniques to capture high-resolution images that highlight the details and craftsmanship of your products."
              />
            </Col>

            <Col>
              <CustomCard
                title="Artistic Composition"
                data="Applying creative composition techniques to showcase your products in an appealing and visually engaging manner."
              />
            </Col>

            <Col>
              <CustomCard
                title="Customized Set Design"
                data="Creating customized sets that complement your brand aesthetic and enhance the overall visual appeal of your product images."
              />
            </Col>
          </Row>
        </div>

        {/* web development section */}
        <div>
          <DataSection
            title="Photo Editing Services"
            data="Our photo editing services take your raw images to the next level, ensuring they meet the highest standards of visual excellence."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Color Correction"
                data="Balancing and enhancing colours to ensure accurate representation and visual appeal."
              />
            </Col>

            <Col>
              <CustomCard
                title="Image Retouching"
                data="Perfecting product images by removing imperfections, and blemishes, and enhancing details."
              />
            </Col>

            <Col>
              <CustomCard
                title="Background Removal"
                data="Creating clean and professional backgrounds to make your product stand out."
              />
            </Col>

            <Col>
              <CustomCard
                title="Image Enhancement"
                data="Applying enhancements such as sharpness, contrast, and saturation to make your images visually stunning."
              />
            </Col>
          </Row>
        </div>

        {/* e commerce section */}
        <div>
          <DataSection
            title="E-Commerce Photography"
            data="For businesses in the e-commerce space, we understand the importance of visually appealing product images. Our e-commerce photography services are designed to optimize your online store's visual content."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Consistent Style"
                data="Maintaining a consistent style across all product images to create a cohesive and professional look for your e-commerce platform."
              />
            </Col>

            <Col>
              <CustomCard
                title="Multiple Angles"
                data="Capturing products from different angles to provide a comprehensive view for potential customers."
              />
            </Col>

            <Col>
              <CustomCard
                title="Quick Turnaround"
                data="Efficiently delivering high-quality images within a quick turnaround time to meet the demands of your e-commerce business."
              />
            </Col>
          </Row>
        </div>

        {/* cms section */}
        <div>
          <DataSection
            title="Branding Photography"
            data="Bring your brand to life through compelling branding photography that communicates your story and values."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Brand Storytelling"
                data="Creating images that tell the story of your brand, building a connection with your audience."
              />
            </Col>

            <Col>
              <CustomCard
                title="Corporate Photography"
                data="Professional portraits, office spaces, and event photography that showcase the human side of your business."
              />
            </Col>

            <Col>
              <CustomCard
                title="Social Media Content"
                data="Generating visually appealing content for your social media platforms to strengthen your brand presence."
              />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection
            title="Customized Packages"
            data="We understand that every business has unique needs. Our customizable packages allow you to choose the services that align with your brand objectives and budget."
          />

          {/* card section */}
          <Row>
            <Col>
              <CustomCard
                title="Tailored Solutions"
                data="Crafting packages that cater to the specific requirements of your brand, whether it's a one-time project or ongoing photography and editing support."
              />
            </Col>

            <Col>
              <CustomCard
                title="Flexible Pricing"
                data="Offering competitive and transparent pricing options to accommodate businesses of all sizes."
              />
            </Col>
          </Row>
        </div>

        <div>
          <DataSection
            data="At Trevita Infotech, we believe in the transformative power of visual storytelling. Let us be your creative partners in capturing and enhancing images that not only showcase your products but also reflect the essence of your brand. Elevate your visual identity with us, where each image tells a story of quality, professionalism, and visual excellence."
          />
        </div>
      </Container>
    </div>
  );
}

export default PhotoInfo;
