import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteHotel } from "../../lib/controller";
import { NewHotelType } from "../../types/hotels";
import { EditHotel } from "../EditHotel";
import {
  Container,
  Description,
  Feature,
  HightLights,
  ImageContainer,
  Line,
  Price,
  Text,
  Details,
  Button,
} from "./styles";

interface DetailsProps {
  hotel: NewHotelType;
  detailsPage: boolean;
}

export function Information({ hotel, detailsPage }: DetailsProps) {
  const [editDescription, setEditDescription] = useState(false)
  const navigate = useNavigate()


  return (
    <Container>
      <ImageContainer>
        <img src={hotel.location} alt="" />
        <HightLights>
          <Text>
            <h2>{hotel.title}</h2>
            <p>{hotel.region}</p>
          </Text>

          <Price>
            <h2>R${hotel.perNight}</h2>
            <p>por noite</p>
          </Price>
        </HightLights>
      </ImageContainer>
      <Description>
        <div>
          <strong>{hotel.stars} stars</strong>
          <span>
            based on {hotel.review} reviews
          </span>

          <Line />
          <span>Main feature {hotel.feature}</span>
          {detailsPage ? (
            <Details>
              <p>{hotel.description}
                <span onClick={() => setEditDescription(!editDescription)}>
                  Edit description
                </span>
                {editDescription
                  ?
                  <EditHotel
                    editDescription={editDescription}
                    setEditDescription={setEditDescription}
                    id={hotel.id}
                  />
                  : null}
              </p>
            </Details>
          )
            : (
              <Feature>
                <span>Main feature {hotel.feature}</span>
                <Link to={`/hotels/${hotel.id}`}>Mais informações</Link>
              </Feature>
            )}

          <Button onClick={() => deleteHotel(String(hotel.id), navigate)}>
            Delete Hotel
          </Button>

        </div>
      </Description>
    </Container>
  )
}