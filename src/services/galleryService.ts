import { collection, addDoc, serverTimestamp, query, where, orderBy, getDocs, QueryDocumentSnapshot, DocumentData, Timestamp, onSnapshot} from 'firebase/firestore'
import { db } from '@/firebase' // asegúrate que esta ruta esté correcta

// 🚨 Reemplaza estos valores con los tuyos
const CLOUD_NAME = 'dr0n6tfhw' // tu Cloud Name
const UPLOAD_PRESET = 'unsigned_preset' // tu upload preset configurado como "unsigned"

export async function uploadImageToCloudinary(file: File): Promise<string> {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', UPLOAD_PRESET)

  const res = await fetch(url, {
    method: 'POST',
    body: formData
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}))
    throw new Error(errorData.error?.message || 'Error al subir imagen a Cloudinary')
  }

  const data = await res.json()
  console.log('Imagen subida a Cloudinary:', data.secure_url)
  return data.secure_url
}

export async function uploadImageWithMessage(file: File, message: string) {
  const imageUrl = await uploadImageToCloudinary(file)
  await addDoc(collection(db, 'gallery'), {
    imageUrl,
    message,
    createdAt: serverTimestamp(),
    approved: false
  })
}

export interface GalleryImage {
  id: string
  imageUrl: string
  message: string
  createdAt: Timestamp | null
  approved: boolean
}

export function listenToApprovedGallery(callback: (images: any[]) => void) {
  const galleryRef = collection(db, 'gallery')
const q = query(galleryRef) // sin filtro

  return onSnapshot(q, (querySnapshot) => {
    const images = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    callback(images)
  })
}

