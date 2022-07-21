import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_KEY,
  authDomain: 'bocacode-portal.firebaseapp.com',
  projectId: 'bocacode-portal',
  storageBucket: 'bocacode-portal.appspot.com',
  messagingSenderId: '494313792617',
  appId: process.env.NEXT_PUBLIC_FB_ID,
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const firestore = getFirestore(app)
