import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

export const useFirestore = (c) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const collectionRef = collection(db, 'images')

    const ref = query(collectionRef, orderBy('createdAt', 'desc'))

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setDocs(results)
    })

    return () => unsub()
  }, [c])

  return { docs }
}
