import { Link, useNavigate } from 'react-router-dom'
import {
  FaUser,
  FaHome,
  FaCameraRetro,
  FaUpload,
  FaSearch,
  FaEye,
  FaLock,
} from 'react-icons/fa'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaCameraRetro className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              <FaHome className="mr-1" /> Home
            </Link>
            <Link to="/gallery" className="btn btn-ghost btn-sm rounded-btn">
              <FaEye className="mr-1" /> Gallery
            </Link>
            <Link to="/search" className="btn btn-ghost btn-sm rounded-btn">
              <FaSearch className="mr-1" /> Search
            </Link>

            <Link to="/upload" className="btn btn-ghost btn-sm rounded-btn">
              <FaUpload className="mr-1" /> Upload
            </Link>
            <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
              <FaUser className="mr-1" /> Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: 'Markus Studio',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header

// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

{
  /* <header>
<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Container>
    <Link to="/">
      <Navbar.Brand>Firegram</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          <FaUser /> Login
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header> */
}
