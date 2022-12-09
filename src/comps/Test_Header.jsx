import { Link, useNavigate } from 'react-router-dom'
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

const Test_Header = ({ title }) => {
  const { logout } = useLogout()
  return (
    <div className="container max-w-6xl mx-auto px-6 py-12">
      {/* <!-- Menu/Logo Container --> */}
      <nav class="navbar mb-12 shadow-lg bg-neutral text-neutral-content justify-between flex items-center">
        <div className="flex-none px-2 mx-2">
          <FaCameraRetro className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        {/* <!-- Menu --> */}
        <div className="hidden h-10 font-alata md:flex md:space-x-8">
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
          <Link to="/signup" className="btn btn-ghost btn-sm rounded-btn">
            <FaUser className="mr-1" /> Signup
          </Link>
          <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
            <FaLock className="mr-1" /> Login
          </Link>
          <li className="btn btn-ghost btn-sm rounded-btn" onClick={logout}>
            <FaLockOpen className="mr-1" /> Logout
          </li>
        </div>
        {/* <!-- Hamburger Button --> */}

        <div className="md:hidden">
          <button
            id="menu-btn"
            type="button"
            className="z-40 block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      {/* <!-- Mobile Menu --> */}
      {/* <div
        id="menu"
        class="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
      >
        <a href="#" class="hover:text-pink-500">
          About
        </a>
        <a href="#" class="hover:text-pink-500">
          Careers
        </a>
        <a href="#" class="hover:text-pink-500">
          Events
        </a>
        <a href="#" class="hover:text-pink-500">
          Products
        </a>
        <a href="#" class="hover:text-pink-500">
          Support
        </a>
      </div>

      <div class="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
        Impressive Experiences That Deliver
      </div> */}
    </div>
  )
}

Test_Header.defaultProps = {
  title: 'Markus Studio',
}

Test_Header.propTypes = {
  title: PropTypes.string,
}
export default Test_Header
