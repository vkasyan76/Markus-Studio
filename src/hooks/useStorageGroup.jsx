import { useState, useEffect } from 'react'
import { serverTimestamp, collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage, db } from '../firebase/config'

const useStorageGroup = (file, Event, Location) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if (!file) return
    const storageRef = ref(storage, `/files/${file.name}`)

    const collectionRef = collection(db, 'images')
    // https://softauthor.com/firebase-firestore-add-document-data-using-adddoc/

    const uploadTask = uploadBytesResumable(storageRef, file)

    var unsubscribe = uploadTask.on(
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
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        const createdAt = serverTimestamp()

        addDoc(collectionRef, { url, createdAt, Event, Location }).then(
          setUrl(url),
        )
      },
    )
    // Use the returned function to remove callbacks.
    // https://firebase.google.com/docs/reference/node/firebase.storage.UploadTask
    return () => unsubscribe()
  }, [file, error])

  return { progress, url, error }
}

export default useStorageGroup
