import { useEffect, useState, useRef } from 'react'
import { db } from '../firebase/config'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'

export const useFirestoreSearch = (c, _q) => {
  const [docs, setDocs] = useState(null)

  // set up query
  const q = useRef(_q).current

  useEffect(() => {
    let ref = collection(db, c)

    if (q) {
      ref = query(ref, where(...q))
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setDocs(results)
    })

    return () => unsub()
  }, [c, q])

  return { docs }
}
