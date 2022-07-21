import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDxyACnZ1GOT-7YJosdoLJVEHjAVzaZDF8',
  authDomain: 'bocacode-portal.firebaseapp.com',
  projectId: 'bocacode-portal',
  storageBucket: 'bocacode-portal.appspot.com',
  messagingSenderId: '494313792617',
  appId: '1:494313792617:web:f34123b473a5dbe21eeef8',
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const firestore = getFirestore(app)
