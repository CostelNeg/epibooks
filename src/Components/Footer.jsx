import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card className="fixed-bottom">
      <Card.Header>Chi siamo</Card.Header>
      <Card.Body>
        <Card.Title>I Nostri Contatti</Card.Title>
        <Card.Text>
          <ListGroup className="justify-content-center align-items-center" as="ol" numbered>
            <ListGroup.Item as="li">Telefono : 39092010232</ListGroup.Item>
            <ListGroup.Item as="li">Email : johnBravo@gmail.com</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Footer;
