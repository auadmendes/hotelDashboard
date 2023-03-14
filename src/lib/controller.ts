import { addDoc, collection, deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { AddHotelType } from '../types/hotels';
import { app } from "./firebase";

export const firestore = getFirestore(app);

//Hotels collections

export const hotelsCollections = collection(firestore, 'hotels')

// add new document

export async function addHotel(hotelData: AddHotelType) {
  const newHotel = await addDoc(hotelsCollections, {...hotelData})
  console.log('New hotel was created at ' + newHotel.path)
}

// delete document

export async function deleteHotel(id: string, navigate: any) {
  const document = doc(firestore, `hotels/${id}`)
  await deleteDoc(document)
  navigate('/')
}

// edit a document / description

export async function updateHotel(id: string | undefined, docData: any) {
  const getHotel = doc(firestore, `hotels/${id}`)
  await setDoc(getHotel, docData, { merge: true })
}