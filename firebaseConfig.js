import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_KEY,
  authDomain: "bocacode-intranet-api.firebaseapp.com",
  databaseURL: "https://bocacode-intranet-api-default-rtdb.firebaseio.com",
  projectId: "bocacode-intranet-api",
  storageBucket: "bocacode-intranet-api.appspot.com",
  messagingSenderId: "1026413154242",
  appId: process.env.NEXT_PUBLIC_FB_ID,
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const firestore = getFirestore(app)
