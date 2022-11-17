import React from 'react'
import { ImageGrid } from './ImageGrid'
import UploadForm from './UploadForm'
// import UploadImage_Pedro from './UploadImage_Pedro'
// import UseStorage_youtube from '../comps/UseStorage_youtube'

const Title = () => {
  return (
    <div className="title">
      <h1>FireGram</h1>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <UploadForm />
      {/* <hr /> */}
      {/* <UploadImage_Pedro /> */}
      {/* <hr /> */}
      {/* <UseStorage_youtube /> */}
      <ImageGrid />
    </div>
  )
}

export default Title
