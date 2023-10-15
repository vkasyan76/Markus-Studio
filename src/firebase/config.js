import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBdPMAs3V5vlfve0DoKwpDkPpNa05XLU8g',
    authDomain: 'firegram-218c5.firebaseapp.com',
    projectId: 'firegram-218c5',
    storageBucket: 'firegram-218c5.appspot.com',
    messagingSenderId: '147904370577',
    appId: '1:147904370577:web:f8b5aa56861707dd61ec30',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

initializeApp(firebaseConfig)

// init firestore
const db = getFirestore(app)
const storage = getStorage(app)

// init firebase auth  - for future authentification
const auth = getAuth()

export { db, auth, storage }