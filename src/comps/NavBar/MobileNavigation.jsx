import NavLinks from './NavLinks'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaCameraRetro } from 'react-icons/fa'

const MobileNavigation = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      {/* <div className="flex-none px-1 mx-1">
        <FaCameraRetro className="inline pr-2 text-3xl" />
        <Link to="/" className="text-lg font-bold align-middle">
          {title}
          <nav></nav>
        </Link>
      </div> */}

      {/* className="hidden md:hidden sm:flex sm:space-x-0.1 sm:justify-center sm: content-center bg-black" */}

      {/* absolute top-0 bottom-0 left-0 hidden md:flex-col px-2 mx-2 bg-black */}

      {/* <nav className="absolute inset-y-0 right-0 w-16 top-20 bottom-0 flex-col self-end py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black flex"> */}
      {/* min-h-screen */}
      {/* w-full  */}
      <nav
        className={`absolute inset-y-0 left-0 w-full top-20 bottom-auto pb-2 flex-col self-end pt-2 pl-5 pr-5 space-y-3 text-lg text-white uppercase bg-neutral opacity-90 z-50 border-red-600 border-t-2 ${
          menuOpen ? 'hidden' : 'flex'
        }`}
      >
        {/* <NavLinks /> */}
        {!menuOpen && <NavLinks />}
      </nav>
      {/* <nav className="absolute flex-col top-80 right-0 w-full"> */}
      {/* absolute inset-y-0 right-0 w-auto top-20 bottom-auto pb-2 flex-col self-end pt-2 pl-5 space-y-3 text-lg text-white uppercase bg-neutral opacity:1 z-50 */}
      <button
        id="menu-btn"
        type="button"
        className={`absolute right-0 z-40 block hamburger md:hidden focus:outline-none ${
          menuOpen ? 'open' : ''
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
  )
}

MobileNavigation.defaultProps = {
  title: 'Markus Studio',
}

MobileNavigation.propTypes = {
  title: PropTypes.string,
}

export default MobileNavigation

// absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black

// flex-row px-2 mx-2

// className="hidden md:hidden sm:flex sm:space-x-0.1 sm:justify-center sm: content-center bg-black"

// className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black ${
//   menuOpen ? 'hidden' : 'flex'
// }`}
