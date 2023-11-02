import { useState } from "react";
import{Card, Container,Col,ListGroup,ListGroupItem} from 'react-bootstrap'
import CommentArea from "./CommentArea";

export default function SingleBook({ book }) {
    const [selected, setSelected] = useState(false);
  
    return (
      <Col xs={3} className="d-flex mt-3">
        <Container className="">
          <Card
            onClick={() => setSelected(!selected)}
            style={{
              width: "14rem",
              outline: selected ? "2px solid blue" : "1px solid transparent",
              margin: "-3px",
            }}
            className="flex-grow-1"
          >
            <Card.Img variant="top" style={{ height: "14rem" }} src={book.img} />
            <ListGroup className="align-items-bottom">
              <ListGroup.Item>{book.title}</ListGroup.Item>
              <ListGroup.Item>{book.price}</ListGroup.Item>
            </ListGroup>
          </Card>
          {selected && <CommentArea asin ={book.asin} />}
        </Container>
      </Col>
    );
  }