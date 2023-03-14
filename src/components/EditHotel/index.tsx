import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateHotel } from "../../lib/controller";
import { Container } from "./styles";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}

export function EditHotel({ editDescription, id, setEditDescription }: IProps) {
  const [newDescription, setNewDescription] = useState('')
  const navigate = useNavigate()

  function handleUpdate() {
    setEditDescription(!editDescription)
    updateHotel(id, { description: newDescription })
    navigate('/')
  }

  return (
    <Container>
      <h1>Please enter the new hotel description here</h1>
      <textarea
        placeholder="Ex: Nice hotel locate at..."
        rows={4}
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button
        onClick={handleUpdate}
      >
        Edit
      </button>
    </Container>
  )
}