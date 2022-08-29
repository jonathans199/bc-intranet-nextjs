import * as React from 'react'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { app } from '../firebaseConfig'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/main.scss'

import Layout from './../components/layout'
import { SSRProvider } from 'react-bootstrap'

export interface IUser {
  id?: string | null
  email?: string | null
  user?: object | null
  setUser?: (value: object) => void | object
}

export const UserContext = React.createContext({} as IUser)

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<IUser | undefined>({})

  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, fbUser => {
      if (fbUser) {
        setUser({ id: fbUser.uid, email: fbUser.email })
      } else {
        setUser(undefined)
      }
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SSRProvider>
        <main>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </SSRProvider>
    </UserContext.Provider>
  )
}
export default MyApp
