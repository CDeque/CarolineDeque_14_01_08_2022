//Imports
import styled from "styled-components";
import colors from "../../utils/style/colors";

/**
 *
 * @returns Footer
 */
export default function Footer() {
  return (
    <FooterContainer className="footer_container">
      <FooterText>Wealth Health - HRnet- Copyright 2022</FooterText>
    </FooterContainer>
  );
}
/**
 * @returns Footer style
 */
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.terciary};
`;
const FooterText = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 200;
`;
