import { useState, useEffect } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase/config'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
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
      (err) => {
        setError(error)
      },
      // console.log(err)
      async () => {
        // getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        setUrl(url)
      },
    )
  }, [file, error])

  return { progress, url, error }
}

export default useStorage
