//Imports
import Form from "../../components/Form";
import styled from "styled-components";

/**
 * @returns HomePage
 */
export default function Home() {
  return (
    <Main className="main">
      <Form />
    </Main>
  );
}

/**
 *@returns Home Page style
 */

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
