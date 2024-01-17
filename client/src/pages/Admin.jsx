import {Row, Col} from 'react-bootstrap';
import Sidebar from '../components/Admin/Sidebar';

export default function Admin() {
  return (
    <div>
      <Row>
        <Col sm={2} md={2}>
          <Sidebar />
        </Col>

        <Col sm={9} md={9}>
          data related to onclick will be shown here
        </Col>
      </Row>
    </div>
  )
}
