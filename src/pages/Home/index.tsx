import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { hotelsCollections } from "../../lib/controller";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";

import { Container } from "./styles";
import { NewHotelType } from "../../types/hotels";


export function Home() {
  const [hotels, setHotels] = useState<NewHotelType[]>([])

  function geAllHotels() {
    onSnapshot(hotelsCollections,
      (snapshot: QuerySnapshot<DocumentData>) => {
        setHotels(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          })
        )
      })
  }

  useEffect(() => {
    geAllHotels()
  }, [])

  return (
    <Container>
      {hotels && hotels.length ? (
        <div>
          {hotels.map((hotel) => (
            <Card key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <div>empty</div>
      )}
    </Container>
  )
}