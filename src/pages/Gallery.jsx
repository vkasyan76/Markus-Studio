import { Link } from 'react-router-dom'
import { useFirestore } from '../hooks/useFirestore'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from '../comps/Modal'
import { FaSearch } from 'react-icons/fa'

import image1 from '../images/image1.jpg'
import bookmark from '../images/bookmark.svg'

const Gallery = () => {
  const { docs } = useFirestore('images')

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cyan-50">
        {/* Card Container */}
        <div className="bg-white p-3 m-3 shadow-2xl rounded-3xl md:p-40">
          {/* Gallery Container */}

          <div className="grid gap-4 md:grid-cols-3">
            {/* Images */}

            {docs &&
              docs.map((doc) => (
                <div
                  className="relative group"
                  onClick={() => setSelectedImg(doc.url)}
                >
                  <img src={doc.url} alt="" className="w-72" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                    <div className="flex justify-between w-full">
                      <div className="font-normal">
                        <p className="text-sm">Abstract Painting</p>
                        <p className="text-xs">245 likes -35 shares</p>
                      </div>
                      <div className="flex items-center">
                        <img src={bookmark} alt="bookmark" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  )
}

export default Gallery
