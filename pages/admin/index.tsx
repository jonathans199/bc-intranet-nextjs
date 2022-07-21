import * as React from 'react'
import { storage, firestore } from '../../firebaseConfig'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { collection, addDoc, getDocs } from 'firebase/firestore'

import { Hero } from '../../components/Hero'
import styles from './Admin.module.scss'

export default function Admin() {
  const [progresspercent, setProgresspercent] = React.useState(0)
  const [allDownloadUrls, setAllDownloadUrls] = React.useState([])
  const [images, setImages] = React.useState<String[]>([])

  React.useEffect(() => {
    const allImages: string[] = []
    const getAllImages = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'events'))
      console.log(querySnapshot)
      for (const item of querySnapshot.docs) {
        const url = item.data()
        allImages.push(url.img)
      }
      setImages(allImages)
    }

    getAllImages()
  }, [])

  const addInFirestore = async (url: String) => {
    try {
      const docRef = await addDoc(collection(firestore, 'events'), {
        img: url,
      })
      console.log('document written with ID: ', docRef.id)
    } catch (err) {
      console.error('error adding document', err)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    // @ts-ignore
    const allFiles = e.target[0].files

    Object.entries(allFiles).forEach(eachFile => {
      // @ts-ignore
      const storageRef = ref(storage, `concurso2022/${eachFile[1].name}`)
      // @ts-ignore
      const uploadTask = uploadBytesResumable(storageRef, eachFile[1])

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          setProgresspercent(progress)
        },
        error => {
          alert(error)
        },
        () => {
          // getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => setAllDownloadUrls(previousUrls => [...previousUrls, downloadURL]))
          getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
            // @ts-ignore
            setAllDownloadUrls(previousUrls => [...previousUrls, downloadURL])
            await addInFirestore(downloadURL)
          })
        }
      )
    })
  }

  return (
    <>
      <Hero heading='Admin Dashboard' subHeading='Only for admins' type='fiesta' />
      <section className={`${styles['fiesta-info']} container`}>
        <h1>Admin</h1>
        <p>Marinera en el Mundo presenta la Tradicional Fiesta del Pañuelo, cena de gala y exhibición de Campeones Club Libertad de Trujillo.</p>
         {/* @ts-ignore */}
        <form className='form' onSubmit={handleSubmit}>
          <input type='file' multiple />
          <button type='submit'>Upload</button>
        </form>
        {!allDownloadUrls && (
          <div className='outerbar'>
            <div className='innerbar' style={{ width: `${progresspercent}%` }}>
              {progresspercent}%
            </div>
          </div>
        )}
      </section>
      images here
      {images?.map((img:String, index) => {
        console.log('ieach img', img)
        // @ts-ignore
        return <img key={index} src={img} alt='uploaded file' height={200} width={200} />
      })}
    </>
  )
}
