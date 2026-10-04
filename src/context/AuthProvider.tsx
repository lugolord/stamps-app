import React, { useState, useEffect, type ReactNode } from "react"
import { onAuthStateChanged, signOut, type User } from "firebase/auth"
import { auth } from '../firebase/auth'
import type { AuthContextType } from './AuthContext'
import { AuthContext } from './AuthContext'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider ({ children }: AuthProviderProps): React.JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const logOut = async (): Promise<void> => {
    await signOut(auth)
  }

  const valorCompartido: AuthContextType = {
    user,
    loading,
    logOut
  }

  return (
    <AuthContext.Provider value={valorCompartido}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
