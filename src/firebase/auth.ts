import { app } from './config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export const auth = getAuth(app)

export async function login (email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    console.log("¡Sesión iniciada con éxito! UID:", user.uid)
  } catch (error) {
    console.error("Error al iniciar sesión: ", error)
  }
}
