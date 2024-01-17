import { Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/contact")
      .then((response) => {
        setFormData(response.data);
        toast.success("Data fetching successfull",{
            position:'top-center',
            autoClose: 1000,
            theme:'dark'
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Cannot fetch all data");
      });
  },[window.onload]);

  return (
    <div>
      <Table striped bordered hover variant="dark" responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Phone number</th>
          </tr>
        </thead>

        {formData.map((items) => (
          <tbody>
            <tr>
              <td>{items._id}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.companyName}</td>
              <td>{items.phoneNumber}</td>
            </tr>
          </tbody>
        ))}
        {/* <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody> */}
      </Table>
    </div>
  );
};

export default ContactUs;
