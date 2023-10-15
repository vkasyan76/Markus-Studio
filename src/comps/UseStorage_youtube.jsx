import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase/config'

import React from 'react'

const useStorage_youtube = () => {
  const [progress, setProgress] = useState(0)

  const formHandler = (e) => {
    e.preventDefault()
    const file = e.target[0].files[0]
    uploadFiles(file)
  }

  const uploadFiles = (file) => {
    // const [error, setError] = useState(null)
    // const [url, setUrl] = useState(null)

    if (!file) return
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )

        setProgress(prog)
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
      },
    )
  }

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h3>Uploaded {progress}%</h3>
    </div>
  )
}

export default useStorage_youtube
