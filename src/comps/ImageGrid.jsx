import { useFirestore } from '../hooks/useFirestore'
import { useState } from 'react'
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
            <div
              className="gallery-frame"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
            >
              <img className="gallery-img" src={doc.url} alt="uploaded pick" />
            </div>
          ))}
      </div>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  )
}
