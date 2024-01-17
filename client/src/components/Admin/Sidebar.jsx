import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <Stack gap={4} className="flex justify-center items-center">
        <Link to="/admin/contactus" className="no-underline text-black border-2">
          <p>Contact us</p>
        </Link>
        <Link to="/contact-form" className="no-underline text-black">
          <p>Contact us</p>
        </Link>
        <Link to="/contact-form" className="no-underline text-black">
          <p>Contact us</p>
        </Link>
        <Link to="/contact-form" className="no-underline text-black">
          <p>Contact us</p>
        </Link>
      </Stack>
    </div>
  );
}
