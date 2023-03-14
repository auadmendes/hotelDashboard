import { useContext } from "react";

import Switch from 'react-switch'
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext)

  //const navigate = useNavigate();

  function navigateTo(key: string) {
    // navigate('/')
    alert('asdasdad')
  }

  return (
    <Container>
      <div>
        <h2>Dashboard</h2>
        <a href="/">All Hotels</a>
        <a href="/create">Create</a>
      </div>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={title === 'light'}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  )
}