import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #1E1E20;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
  }
`
