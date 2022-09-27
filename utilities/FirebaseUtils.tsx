import { firestore } from '../firebaseConfig'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export const FirestorePost = async (collectionName: String, newData: Object) => {
  try {
    // @ts-ignore
    const docRef = await addDoc(collection(firestore, collectionName), newData)
    console.log('Document written with ID: ', docRef.id)
  } catch (err) {
    throw err
  }
}

export const FirebaseGet = async (collectionName: String) => {
  try {
    // @ts-ignore
    const querySnapshot = await getDocs(collection(firestore, collectionName))
    const data: Object[] = []

    querySnapshot.forEach(doc => {
      // data.push(doc.data())
      let thisDoc = doc.data()
      if (thisDoc.createdAt) {
        thisDoc.createdAt = thisDoc.createdAt.seconds * 1000
      }
      data.push(thisDoc)
    })
    return data
  } catch (err) {
    throw err
  }
}

// todo: Upload image to Firebase Hosting
export const FirebaseImagePost = async () => {}
