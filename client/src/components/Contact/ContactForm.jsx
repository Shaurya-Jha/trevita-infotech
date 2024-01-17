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

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState([]);

  const form = useForm();

  // allows us to register form control
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = form;

  const onSubmit = (data) => {
    const formData = getValues();
    // console.log(formData);

    axios
      .post("http://localhost:5000/contact", formData)
      .then((response) => {
        setData(response.data);
        toast.success("Your contact details have been recorded", {
          position: "top-center",
          theme: "dark",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Details already exists", {
          position: "top-center",
          theme: "dark",
          autoClose: 2000,
        });
      });

      form.reset()
  };

  return (
    <div>
      {/* form section */}
      <div>
        
        <Container>
          <Row>
            <Col>
              <div className="sm:hidden md:block">
                <p>image will be displayed here</p>
              </div>
            </Col>

            <Col>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("name", { required: true, maxLength: 35 })}
                  />
                  {errors.name && errors.name.type === "required" && (
                    <Alert variant="danger">Name is required!</Alert>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                    <Alert variant="danger">Max length is 35</Alert>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" {...register("email")} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" {...register("companyName")} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("phoneNumber", {
                      required: true,
                      maxLength: 10,
                    })}
                  />
                  {errors.phoneNumber &&
                    errors.phoneNumber.type === "required" && (
                      <Alert variant="danger">Phone number is required!</Alert>
                    )}
                  {errors.phoneNumber &&
                    errors.phoneNumber.type === "maxLength" && (
                      <Alert variant="danger">Number length limit is 10!</Alert>
                    )}
                </Form.Group>
                <div className="flex justify-center mt-3">
                  <button
                    className="bg-[--main] text-white px-4 py-2 rounded-3xl"
                    type="submit"
                  >
                    {" "}
                    Submit
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>

        {/* new form section */}
        {/* <div>
          <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true, maxLength: 35 })}
              /> */}
        {/* alert for name is required */}
        {/* {errors.name && errors.name.type === "required" && (
                <Alert variant="danger">Name is required!</Alert>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <Alert variant="danger">Max length is 35</Alert>
              )}

              <label htmlFor="email">Email</label>
              <input type="email" id="email" {...register("email")} />

              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                {...register("companyName")}
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                id="phoneNumber"
                {...register("phoneNumber", { required: true, maxLength: 10 })}
              />
              {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                <Alert variant="danger">Phone number is required!</Alert>
              )}
              {errors.phoneNumber &&
                errors.phoneNumber.type === "maxLength" && (
                  <Alert variant="danger">Number length limit is 10!</Alert>
                )}

              <button type="submit">Submit</button>
            </form>
          </div>
        </div> */}
      </div>

      {/* <ToastContainer position="top-center" autoClose={3500} theme="dark" /> */}
    </div>
  );
}
