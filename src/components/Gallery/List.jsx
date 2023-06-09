import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import GalleryCard from "./GalleryCard.jsx";
import data from "../../data/gallery.json";

export default function List () {

  return (
    <Container className="gallery-container">
      <Row>
        <Col>
          <h2 className="text-center">Portfolio</h2>
        </Col>
      </Row>

      <Row className="g-3 justify-content-center">
        {
          data.map( 
            (element) => {
              return element
                ? <GalleryCard data={element} />
                : <p>Loading</p>
            }
          )
        }
      </Row>
    </Container>
  )
}