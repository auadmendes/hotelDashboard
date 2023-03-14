import { Link } from "react-router-dom";
import { NewHotelType } from "../../types/hotels";
import {
  Container,
  ImageContainer,
  HightLights,
  Text,
  Price,
  Description,
  Line,
  Feature,
} from "./styles";

interface HotelProps {
  hotel: NewHotelType;
}

export function Card({ hotel }: HotelProps) {

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
          <Feature>
            <span>Main feature {hotel.feature}</span>
            <Link to={`/hotels/${hotel.id}`}>Mais informações</Link>
          </Feature>
        </div>
      </Description>
    </Container>
  )
}