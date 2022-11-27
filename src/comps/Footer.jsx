// import { FaRocket } from 'react-icons/fa'
import { FaRegPaperPlane } from 'react-icons/fa'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
      <div>
        <FaRegPaperPlane className="text-3xl" />
        <p>Copyright &copy; {footerYear} All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
