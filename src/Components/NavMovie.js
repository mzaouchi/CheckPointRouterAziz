import { Navbar,Container,Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
const NavMovie=()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to="/moviesList">Movies</Nav.Link>   
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavMovie