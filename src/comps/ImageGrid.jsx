import { useFirestore } from '../hooks/useFirestore'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from './Modal'

export const ImageGrid = () => {
  const { docs } = useFirestore('images')
  // console.log(docs)

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <>
      <div className="gallery-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="gallery-frame"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                className="gallery-img"
                src={doc.url}
                alt="uploaded pick"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  )
}
