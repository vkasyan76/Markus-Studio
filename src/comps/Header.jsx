import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  FaUser,
  FaHome,
  FaCameraRetro,
  FaUpload,
  FaSearch,
  FaEye,
  FaLock,
  FaLockOpen,
} from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useLogout } from '../hooks/useLogout'
import { HamburgerMenu } from './HamburgerMenu'

const Header = ({ title }) => {
  const { logout } = useLogout()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="container max-w-6xl mx-auto">
      {/* container mx-auto justify-between flex flex-row */}
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content justify-between flex items-center">
        <div className="flex-none px-2 mx-2">
          <FaCameraRetro className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="hidden flex-1 px-2 mx-2 md:flex md:space-x-0.1 md:justify-end">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn mx-0 px-0">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link
            to="/gallery"
            className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
          >
            <FaEye className="mr-1" /> Gallery
          </Link>
          <Link
            to="/search"
            className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
          >
            <FaSearch className="mr-1" /> Search
          </Link>

          <Link
            to="/upload"
            className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
          >
            <FaUpload className="mr-1" /> Upload
          </Link>
          <Link
            to="/signup"
            className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
          >
            <FaUser className="mr-1" /> Signup
          </Link>
          <Link
            to="/login"
            className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
          >
            <FaLock className="mr-1" /> Login
          </Link>
          <li
            className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
            onClick={logout}
          >
            <FaLockOpen className="mr-1" /> Logout
          </li>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            type="button"
            // className="open z-40 block hamburger md:hidden focus:outline-none"
            // className={`z-40 block hamburger md:hidden focus:outline-none ${
            //   menuOpen ? 'open' : ''
            // }`}
            // onClick={() => {
            //   setMenuOpen(true)
            // }}

            className={`z-40 block hamburger md:hidden focus:outline-none ${
              menuOpen ? '' : 'open'
            }`}
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menue */}
      <div
        id="menu"
        className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black ${
          menuOpen ? 'hidden' : 'flex'
        }`}
      >
        <Link to="/" className="hover:text-pink-500">
          <FaHome className="mr-1" /> Home
        </Link>
        <Link to="/gallery" className="hover:text-pink-500">
          <FaEye className="mr-1" /> Gallery
        </Link>
        <Link to="/search" className="hover:text-pink-500">
          <FaSearch className="mr-1" /> Search
        </Link>

        <Link to="/upload" className="hover:text-pink-500">
          <FaUpload className="mr-1" /> Upload
        </Link>
        <Link to="/signup" className="hover:text-pink-500">
          <FaUser className="mr-1" /> Signup
        </Link>
        <Link to="/login" className="hover:text-pink-500">
          <FaLock className="mr-1" /> Login
        </Link>
        <li className="hover:text-pink-500" onClick={logout}>
          <FaLockOpen className="mr-1" /> Logout
        </li>
      </div>
    </div>
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
