import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  serverTimestamp, 
  updateDoc, 
  increment 
} from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)

export async function getUserByDni (dni: string) {
  const docRef = doc(db, 'users', dni)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log("¡El documento no existe!")
    return docSnap.data()
  }
}

export async function createUser (user: { name: string, dni: string }) {
  try {
    await setDoc(doc(db, "users", user.dni), {
      name: user.name,
      dni: user.dni,
      stampsCount: 0,
      createdAt: serverTimestamp()
    })
    console.log("Documento creado con éxito")
  } catch (error) {
    console.error("Error al guardar el documento: ", error)
  }
}

export async function addStamp (dni: string) {
  const userDocRef = doc(db, "users", dni)
  try {
    await updateDoc(userDocRef, {
      stampsCount: increment(1)
    })
    console.log("Documento actualizado con éxito")
  } catch (error) {
    console.error("Error al actualizar:", error)
  }
}

export async function resetStamps (dni: string) {
  const userDocRef = doc(db, "users", dni)
  try {
    await updateDoc(userDocRef, {
      stampsCount: 0
    })
    console.log("Documento actualizado con éxito")
  } catch (error) {
    console.error("Error al actualizar:", error)
  }
}
