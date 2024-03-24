import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Body1({id , img , title , Text}) {
  return (
    // <Card style={{width : '300px' , marginLeft : '800px'}}>
    //     <Card.Img  variant="top" src={img} />
    //     <Card.Body>
    //       <Card.Title>{title}</Card.Title>
    //       <Card.Text>
    //          {Text}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>

    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {Text}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  );
}

export default Body1;
