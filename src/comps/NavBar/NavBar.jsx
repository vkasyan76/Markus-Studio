import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar h-20 mb-12 shadow-lg bg-neutral text-neutral-content justify-between flex">
        <Navigation />
        <MobileNavigation />
      </nav>
    </div>
  )
}

export default NavBar

{
  /* <div className="container mx-auto"> */
}

{
  /* <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content justify-between flex items-center"> */
}

// items-center

// justify-between
