import { Row, Col } from "react-bootstrap";

function DataSection({ title, data }) {
  return (
    <Row>
      <Col className="my-4 pt-4">
        <div className="flex justify-center my-4 capitalize">
          <h3 className="text-[--main] text-3xl">{title}</h3>
        </div>
        <p className="mt-3 mb-2 pb-2">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{data}</p>
      </Col>
    </Row>
  );
}

export default DataSection;
