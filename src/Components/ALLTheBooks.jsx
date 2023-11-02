import {
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import fantasy from "../Film/fantasy.json";
import history from "../Film/history.json";
import horror from "../Film/horror.json";
import romance from "../Film/romance.json";
import scifi from "../Film/scifi.json";
import SingleBook from "./SingleBook";

import { useState } from "react";

const booksByGenre = {
  fantasy,
  history,
  horror,
  scifi,
  romance,
};

// function SingleBook({ book }) {
//   const [selected, setSelected] = useState(false);

//   return (
//     <Col xs={3} className="d-flex mt-3">
//       <Container className="">
//         <Card
//           onClick={() => setSelected(!selected)}
//           style={{
//             width: "14rem",
//             outline: selected ? "2px solid blue" : "1px solid transparent",
//             margin: "-3px",
//           }}
//           className="flex-grow-1"
//         >
//           <Card.Img variant="top" style={{ height: "14rem" }} src={book.img} />
//           <ListGroup className="align-items-bottom">
//             <ListGroup.Item>{book.title}</ListGroup.Item>
//             <ListGroup.Item>{book.price}</ListGroup.Item>
//           </ListGroup>
//         </Card>
//       </Container>
//     </Col>
//   );
// }
export default function AllTheBooks() {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("horror");

  const books = booksByGenre[selectedGenre];

  const booksByQuery = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());

  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="my-3"
        justify
        onSelect={(genre) => setSelectedGenre(genre)}
      >
        {Object.keys(booksByGenre).map((genre) => (
          <Tab eventKey={genre} title={genre} />
        ))}
      </Tabs>
      <Form.Group className="py-3">
        <Form.Control
          type="text"
          placeholder="Cerca Libro"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Row className="row-gap-2">
          {books.filter(booksByQuery).map((book) => (
            <SingleBook book={book} key={book.asin} />
          ))}
        </Row>
      </Form.Group>
    </Container>
  );
}
