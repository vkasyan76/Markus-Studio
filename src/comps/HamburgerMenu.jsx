import { Link } from 'react-router-dom'
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
import { useLogout } from '../hooks/useLogout'

export const HamburgerMenu = () => {
  const { logout } = useLogout()
  return (
    <div
      id="menu"
      className="absolute top-0 bottom-0 left-0 flex-col self-end hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
    >
      <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
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
  )
}
