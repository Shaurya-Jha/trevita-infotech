import { Container, Row, Col, Image, Stack } from "react-bootstrap";
// import logo from "../assets/logo/trevita-logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { Link } from "react-router-dom";

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118119.46748648836!2d73.09246447278666!3d22.307012592072418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5d799482795%3A0x8a182ef6102f6963!2sTREVITA%20INFOTECH!5e0!3m2!1sen!2sin!4v1702879954299!5m2!1sen!2sin"
      width="300"
      height="300"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default function Footer() {
  return (
    <div className="bg-[--main] text-white py-8 mt-4">
      {/* better footer */}
      <Container>
        <Row>
          {/* 1st col */}
          <Col sm={6} md={3} className="mt-2">
            <Stack gap={2}>
              <img src={""} alt="trevita infotech" height={200} width={200} />

              <p>some description about the company or any tagline</p>
            </Stack>
          </Col>

          {/* 2nd col */}
          <Col sm={6} md={3} className="mt-4">
            <Stack gap={2}>
              <h3>Company</h3>
              <Link to={"/about"} className="text-white no-underline">
                About
              </Link>
              <Link to={"/services"} className="text-white no-underline">
                Services
              </Link>
              <Link to={"/capabilities"} className="text-white no-underline">
                Capabilities
              </Link>
              <Link to={"/work"} className="text-white no-underline">
                Work
              </Link>
            </Stack>
          </Col>

          {/* 3rd col */}
          <Col sm={6} md={3} className="mt-4">
            <Stack gap={2}>
              <h3>Contact us</h3>
              <div className="flex flex-row">
                <LocalPhoneIcon />
                <p>+91 94846 56464</p>
              </div>

              <div className="flex flex-row">
                <EmailIcon />
                <p>contact@trevitainfotech.com</p>
              </div>

              <div className="flex flex-row">
                <InstagramIcon />
                <LinkedInIcon />
              </div>

              <div className="flex flex-row mt-4">
                <AddLocationIcon />
                <p>
                  2nd Floor, Emerald One, C-283, Jetalpur Rd, near Gujarat
                  Kidney Hospital, Anand Nagar, Alkapuri, Vadodara, Gujarat
                  390007
                </p>
              </div>
            </Stack>
          </Col>

          {/* 4th col */}
          <Col sm={6} md={3} className="mt-4">
            <div className="flex justify-items-end">
              <Map />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
