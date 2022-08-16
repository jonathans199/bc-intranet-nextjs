import * as React from "react"
import {useRouter} from "next/router"
import {storage, firestore} from "../../firebaseConfig"
import {collection, doc, deleteDoc, addDoc, getDoc} from "firebase/firestore"
import {ref, uploadBytesResumable, deleteObject} from "firebase/storage"

import styles from "./ImageUploader.module.scss"
export interface IProps {
  page: String
  setGallery: Function
  gallery: Object[]
}
interface imageProps {
  id: String
  original: String
  thumbnail: String
}

export default function ImageUploader({page, gallery}: IProps) {
  const [progresspercent, setProgresspercent] = React.useState(0)
  const [allDownloadUrls, setAllDownloadUrls] = React.useState(gallery)
  const router = useRouter()

  const deleteImg = async (item: imageProps) => {
    const original = item.original.replace(
      "https://storage.googleapis.com/marineraenelmundoflorida.appspot.com/",
      ""
    )
    const thumbnail = item.thumbnail.replace(
      "https://storage.googleapis.com/marineraenelmundoflorida.appspot.com/",
      ""
    )

    try {
      const itemRef = ref(storage, original)
      const itemRefThumb = ref(storage, thumbnail)
      await deleteObject(itemRefThumb)
      await deleteObject(itemRef)

      // @ts-ignore
      const docRef = doc(firestore, page, item.id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        // @ts-ignore
        await deleteDoc(doc(firestore, page, item.id))
        // @ts-ignore
        router.reload(window.location.pathname)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const addInFirestore = async (url: String) => {
    let thumbnail
    if (url.includes(".jpeg")) {
      thumbnail = url.replace(".jpeg", "_200x200.jpeg")
    } else if (url.includes(".png")) {
      thumbnail = url.replace(".png", "_200x200.jpeg")
    } else if (url.includes(".jpg")) {
      thumbnail = url.replace(".jpg", "_200x200.jpeg")
    }

    let original
    if (url.includes(".jpeg")) {
      original = url.replace(".jpeg", "_1200x1200.jpeg")
    } else if (url.includes(".png")) {
      original = url.replace(".png", "_1200x1200.jpeg")
    } else if (url.includes(".jpg")) {
      original = url.replace(".jpg", "_1200x1200.jpeg")
    }

    try {
      // @ts-ignore
      await addDoc(collection(firestore, page), {
        id: "id",
        original: original,
        thumbnail: thumbnail,
      })
      // @ts-ignore
      router.reload(window.location.pathname)
    } catch (err) {
      console.error("error adding document", err)
    }
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    // @ts-ignore
    const allFiles = e.target[0].files

    Object.entries(allFiles).forEach(eachFile => {
      // @ts-ignore
      const storageRef = ref(storage, `${page}/${eachFile[1].name}`)
      // @ts-ignore
      const uploadTask = uploadBytesResumable(storageRef, eachFile[1])

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          setProgresspercent(progress)
        },
        error => {
          alert(error)
        },
        async () => {
          // @ts-ignore
          const url = `https://storage.googleapis.com/marineraenelmundoflorida.appspot.com/${storageRef._location.path}`
          // @ts-ignore
          setAllDownloadUrls(previousUrls => [...previousUrls, url])
          await addInFirestore(url)
        }
      )
    })
  }

  return (
    <section className={`${styles["image-uploader"]} container`}>
      <h3 className="mb-5">ADMIN SECTION</h3>
      {/* @ts-ignore */}
      <form className="form" onSubmit={handleSubmit}>
        <input type="file" multiple />
        <button type="submit">Upload</button>
      </form>
      <br />
      {!allDownloadUrls && (
        <div className="outerbar">
          <div className="innerbar" style={{width: `${progresspercent}%`}}>
            {progresspercent}%
          </div>
        </div>
      )}
      <div className={"d-flex justify-content-around mb-5 flex-wrap"}>
        {gallery?.map((img: Object, index: Number) => {
          return (
            // @ts-ignore
            <div key={img.id} className="my-5">
              <img
                /* @ts-ignore */
                key={index}
                /* @ts-ignore */
                src={img.thumbnail}
                alt="uploaded file"
                height={"100%"}
                width={"100%"}
              />

              <button
                /* @ts-ignore */
                onClick={() => deleteImg(img)}
                style={{position: "absolute", display: "block"}}
              >
                delete
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
