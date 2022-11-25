//import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function Effecthook() {
  const [currentResource, setResources] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${currentResource}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [currentResource]);

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => setResources("users")}>
            Users
          </Button>
          <Button variant="success" onClick={() => setResources("posts")}>
            Posts
          </Button>
          <Button variant="info" onClick={() => setResources("comments")}>
            Comments
          </Button>
          <div>{currentResource}</div>
          <div className="item-box">
            {items.map((item) => {
              return <pre>{JSON.stringify(item)}</pre>;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Effecthook;
