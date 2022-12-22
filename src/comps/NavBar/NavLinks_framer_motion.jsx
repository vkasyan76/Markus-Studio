import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
  const animateForm = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }

  const { logout } = useLogout()
  return (
    <>
      <motion.Link
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-0"
      >
        <FaHome className="mr-1" /> Home
      </motion.Link>
      <motion.Link
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/gallery"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaEye className="mr-1" /> Gallery
      </motion.Link>
      <motion.Link
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/search"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaSearch className="mr-1" /> Search
      </motion.Link>

      <motion.Link
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/upload"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaUpload className="mr-1" /> Upload
      </motion.Link>
      <motion.Link
        initial={animateForm}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/signup"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaUser className="mr-1" /> Signup
      </motion.Link>
      <motion.Link
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="/login"
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaLock className="mr-1" /> Login
      </motion.Link>
      <li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        onClick={() => props.isMobile && props.closeMobileMenu() && { logout }}
        className="btn btn-ghost btn-sm rounded-btn mx-0 px-1"
        // onClick={logout}
      >
        <FaLockOpen className="mr-1" /> Logout
      </li>
    </>
  )
}

export default NavLinks
