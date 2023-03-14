import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../../lib/controller";
import { Container } from "./styles";

export function Create() {
  const [title, setTitle] = useState('')
  const [feature, setFeature] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [stars, setStars] = useState('')
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [review, setReview] = useState('')
  const [perNight, setPerNight] = useState('')
  const [totalPrice, setTotalPrice] = useState('')


  const navigate = useNavigate()

  function handleCreateHotel() {
    event?.preventDefault();

    addHotel({
      title,
      feature,
      description,
      location,
      stars,
      country,
      region,
      review,
      perNight,
      totalPrice,
    })

    navigate('/')
  }

  return (
    <Container>
      <form onSubmit={handleCreateHotel}>
        <span>Hotel name:</span>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <span>Hotel description:</span>
        <textarea
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <span>Main feature:</span>
        <select
          name="Main value"
          id="mainValue"
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
        >
          <option value="Wifi">Wifi</option>
          <option value="air-conditioner">air conditioner</option>
          <option value="Hydromassage">Hydromassage</option>
          <option value="View">View</option>
        </select>

        <span>Image URL:</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <span>Stars:</span>
        <select
          name="Stars"
          id="stars"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <span>Country:</span>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <span>Region:</span>
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />

        <span>Number of reviews:</span>
        <input
          value={review}
          onChange={(e) => setReview(e.target.value)}
          type="text"
        />

        <span>Price per night:</span>
        <input
          value={perNight}
          onChange={(e) => setPerNight(e.target.value)}
          type="text"
        />

        <span>Total price:</span>
        <input
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          type="text"
        />

        <button>Add hotel</button>
      </form>
    </Container>
  )
}