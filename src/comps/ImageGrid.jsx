import { useFirestore } from '../hooks/useFirestore'
import { useState } from 'react'
// import { motion } from 'framer-motion'
import { Modal } from './Modal'
import bookmark from '../images/bookmark.svg'

export const ImageGrid = () => {
  const { docs } = useFirestore('images')
  // console.log(docs)
  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cyan-50">
        <div className="grid gap-4 lg:md:grid-cols-4 md:grid-cols-3">
          {docs &&
            docs.map((doc) => (
              <div
                className="relative group"
                key={doc.id}
                onClick={() => setSelectedImg(doc.url)}
              >
                <img className="w-72" src={doc.url} alt="uploaded pick" />
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">{doc.Description}</p>
                      <p className="text-xs">{doc.Location}</p>
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

      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  )
}
