import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from 'firebase/firestore'

export const useFirestoreLastItem = (c) => {
  const [docs, setDoc] = useState([])

  // const q = useRef(_q).current

  useEffect(() => {
    const collectionRef = collection(db, 'images')

    const ref = query(collectionRef, orderBy('createdAt', 'desc'), limit(1))

    // if (q) {
    //   ref = query(ref, where(...q))
    // }

    const unsub = onSnapshot(ref, (snapshot) => {
      let result = []
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() })
      })
      setDoc(result)
    })

    return () => unsub()
  }, [c])

  return { docs }
}
