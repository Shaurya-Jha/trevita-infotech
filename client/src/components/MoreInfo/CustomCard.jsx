import {Card} from 'react-bootstrap'

function CustomCard({image, title, data}) {
  return (
    <Card className="!bg-[--main] text-white hover:shadow-2xl max-w-[24rem] mx-auto hover:-translate-y-2 ease-out duration-300 my-4">
        <Card.Img src={image} />

        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{data}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CustomCard