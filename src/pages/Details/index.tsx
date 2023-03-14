import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Information } from "../../components/Information";
import { firestore } from "../../lib/controller";
import { Container, Loading } from "./styles";

export function Details() {
  const { id } = useParams()
  const getHotel = doc(firestore, `hotels/${id}`)
  const [hotel, setHotel] = useState({})

  const [isLoading, setIsLoading] = useState(false)

  async function fetchHotel() {
    setIsLoading(true)
    const docSnap = await getDoc(getHotel)
    if (docSnap.exists()) {
      const newHotelObj = {
        id: docSnap.id,
        ...docSnap.data(),
      }
      setHotel(newHotelObj)
      setIsLoading(false)
    } else {
      //doc.data will be undefined in this case
      console.log('There are no such document', id)
    }
    console.log(hotel, 'Hotel')
  }

  useEffect(() => {
    fetchHotel()
  }, [])

  if (isLoading) return <Loading>Loading....</Loading>

  return (

    <Container>
      {Object.keys(hotel) && Object.keys(hotel).length ? (
        <Information hotel={hotel} detailsPage />
      ) : (
        <div>empty ..........</div>
      )}
    </Container>
  )
}