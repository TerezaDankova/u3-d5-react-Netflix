
import { Col, Container, Row, Dropdown, DropdownButton} from "react-bootstrap";

const MyDiv = () => {
     
            return(
                  <Container className="mt-3 ml-4 pl-0">
                        <Row xs={2} md={8} lg={6} xl={6}>
                              <Col>
                              <h3 className="pr-0" style={{color: "white"}}>TV Shows</h3>
                              </Col>
                              <Col>
                              <DropdownButton className="mr-5 ml-0" title="Genres" variant="outline-light" id="bg-vertical-dropdown-2">
                              <Dropdown.Item eventKey="1">Sci-Fi</Dropdown.Item>
                              <Dropdown.Item eventKey="2">Crime</Dropdown.Item>
                              <Dropdown.Item eventKey="3">Action</Dropdown.Item>
                              </DropdownButton>


                              </Col>

                        </Row>

                  </Container>

            )
      
}

export default MyDiv