import { createGlobalStyle } from "styled-components";
import Avenir from "../../assets/AvenirFont/Avenir Regular.ttf";
/**
 * @return global style
 */
const Style = createGlobalStyle`
@font-face {
  font-family: 'Avenir';
  src:  url(${Avenir}) format('ttf');
}

* {
  font-family: "Avenir", Helvetica, sans-serif;
  
 
      box-sizing: border-box;
  margin: 0;
  padding: 0;
    }
    
    body{
    max-width: 1440px;
    margin: 0 auto;
}

   
`;

export default function GlobalStyle() {
  return <Style />;
}
