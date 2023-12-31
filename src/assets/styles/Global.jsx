import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #FBE0F8;
}

a{
  text-decoration: none;
  color: inherit;
}

`;

export default GlobalStyle