import { motion } from 'framer-motion'

export const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    // only if we click on the backdrop, not on the image, will the modal close:
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        // transition={{ delay: 2 }}
      />
    </motion.div>
  )
}
