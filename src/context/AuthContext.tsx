import type { User } from 'firebase/auth'
import { createContext } from "react"

export interface AuthContextType {
  user: User | null
  loading: boolean
  logOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
