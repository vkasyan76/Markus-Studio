import { useState, useEffect } from 'react'
import { serverTimestamp, collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage, db } from '../firebase/config'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if (!file) return
    const storageRef = ref(storage, `/files/${file.name}`)

    const collectionRef = collection(db, 'images')
    // https://softauthor.com/firebase-firestore-add-document-data-using-adddoc/

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )
        // let prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

        setProgress(prog)
      },
      (err) => {
        setError(error)
      },
      // console.log(err)
      async () => {
        // getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))

        const url = await getDownloadURL(uploadTask.snapshot.ref)
        const createdAt = serverTimestamp()
        // addDoc(collectionRef, { url, createdAt })
        // setDoc(collectionRef, { url, createdAt })
        //   .then((collectionRef) => {
        //     console.log('Document has been added successfully')
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //   })
        // setUrl(url)

        addDoc(collectionRef, { url, createdAt }).then(setUrl(url))
      },
    )
  }, [file, error])

  return { progress, url, error }
}

export default useStorage
