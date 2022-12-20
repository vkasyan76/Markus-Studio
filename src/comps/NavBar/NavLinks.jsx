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

const NavLinks = () => {
  const { logout } = useLogout()
  return (
    <>
      <Link to="/" className="btn btn-ghost btn-sm rounded-btn mx-0 px-0">
        <FaHome className="mr-1" /> Home
      </Link>
      <Link
        to="/gallery"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaEye className="mr-1" /> Gallery
      </Link>
      <Link to="/search" className="btn btn-ghost btn-sm rounded-btn mx-0 px-1">
        <FaSearch className="mr-1" /> Search
      </Link>

      <Link to="/upload" className="btn btn-ghost btn-sm rounded-btn mx-0 px-1">
        <FaUpload className="mr-1" /> Upload
      </Link>
      <Link to="/signup" className="btn btn-ghost btn-sm rounded-btn mx-0 px-1">
        <FaUser className="mr-1" /> Signup
      </Link>
      <Link to="/login" className="btn btn-ghost btn-sm rounded-btn mx-0 px-1">
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
