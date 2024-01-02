import { useForm } from "react-hook-form";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Alert,
  Image,
  Carousel,
} from "react-bootstrap";
import img1 from "../assets/imgs/img1.jpg";
import Hero from "../components/Hero";

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (e, data) => {
    e.preventDefault();

    console.log(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div>
      {/* hero section */}
      <div>
        <Hero image={img1} />
      </div>

      {/* form section */}
      <div className="my-4 pt-4">
        <div className="flex justify-center">
          <h2 className="capitalize">contact us</h2>
        </div>

        <Container className="mt-4">
          <Row>
            <Col>
              <div>
                <Image src={img1} fluid alt="image" />
              </div>
            </Col>

            <Col>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <Form.Group className="my-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="!rounded-3xl"
                    {...register("name", {
                      required: true,
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <Alert className="my-2 h-[60px]" variant="danger">
                      <p>Name is required</p>
                    </Alert>
                  )}
                </Form.Group>

                {/* company */}
                <Form.Group className="my-2">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    className="!rounded-3xl"
                    {...register("companyName")}
                  />
                </Form.Group>

                {/* email */}
                <Form.Group className="my-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="!rounded-3xl"
                    {...register("email")}
                  />
                </Form.Group>

                {/* phone number */}
                <Form.Group className="my-2">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    className="!rounded-3xl"
                    {...register("phoneNumber", {
                      required: true,
                    })}
                    aria-invalid={errors.phoneNumber ? "true" : "false"}
                  />
                  {errors.phoneNumber?.type === "required" && (
                    <Alert className="my-2 h-[60px]" variant="danger">
                      <p>Phone number is required</p>
                    </Alert>
                  )}
                </Form.Group>

                <div className="flex justify-center">
                  <Button variant="dark" type="submit">
                    Contact
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
