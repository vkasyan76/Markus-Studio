import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaCameraRetro } from 'react-icons/fa'

const Navigation = ({ title }) => {
  return (
    <div className="flex justify-end">
      <div className="flex-none px-1 mx-1">
        <FaCameraRetro className="inline pr-2 text-3xl" />
        <Link to="/" className="text-lg font-bold align-middle">
          {title}
        </Link>
      </div>
      <nav className="hidden flex-1 px-2 mx-2 md:flex md:space-x-0.1 md:absolute md:right-0">
        <NavLinks />
      </nav>
    </div>
  )
}

// md:justify-end

Navigation.defaultProps = {
  title: 'Markus Studio',
}

Navigation.propTypes = {
  title: PropTypes.string,
}

export default Navigation
