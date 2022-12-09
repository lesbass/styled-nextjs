import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {firstTheme, secondTheme} from "../components/themes/DefaultTheme";
import { useState} from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 30px;
    background: ${props => props.theme.colors.secondary};
    font-family: Open-Sans, Helvetica, sans-serif;
  }
`;

const HomeWrapper = styled.div`

  h1 {
    color: ${props => props.theme.colors.main};
  }
`

export default function Home() {
    const [theme, setTheme] = useState(firstTheme)

    const changeTheme = () => {setTheme(theme === firstTheme ? secondTheme: firstTheme)}
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <HomeWrapper>
              <h1>Styled Components</h1>
              <br />
              <button onClick={changeTheme}>Change Theme</button>
          </HomeWrapper>
      </ThemeProvider>
  )
}
