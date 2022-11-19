import React from 'react'

export const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    // only if we click on the backdrop, not on the image, will the modal close:
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="enlarged pic" />
    </div>
  )
}
