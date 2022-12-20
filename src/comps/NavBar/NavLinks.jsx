import { Link } from 'react-router-dom'
import {
  FaUser,
  FaHome,
  FaUpload,
  FaSearch,
  FaEye,
  FaLock,
  FaLockOpen,
} from 'react-icons/fa'
import { useLogout } from '../../hooks/useLogout'

const NavLinks = (props) => {
  const { logout } = useLogout()
  return (
    <>
      <Link
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-0"
      >
        <FaHome className="mr-1" /> Home
      </Link>
      <Link
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/gallery"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaEye className="mr-1" /> Gallery
      </Link>
      <Link
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/search"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaSearch className="mr-1" /> Search
      </Link>

      <Link
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/upload"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaUpload className="mr-1" /> Upload
      </Link>
      <Link
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/signup"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaUser className="mr-1" /> Signup
      </Link>
      <Link
        onClick={() => props.isMobile && props.closeMobileMenu()}
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
    </>
  )
}

export default NavLinks
