import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'

export const useFirestoreSearch = (c, d) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const collectionRef = collection(db, 'images')

    const ref = query(
      collectionRef,
      where('Location', '==', 'Berlin'),
      // orderBy('createdAt', 'desc'),
      // orderBy('Location'),
    )

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setDocs(results)
    })

    return () => unsub()
  }, [c, d])

  return { docs }
}
