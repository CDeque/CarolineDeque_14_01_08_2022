// Imports
import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import colors from "../../utils/style/colors";

/**
 *
 * @returns Header
 * with a ternary to change the links according to current page
 */
export default function Header() {
  const url = useLocation();
  return (
    <MainNav>
      <StyledLink to={"/"}>
        <MainLogo src={Logo} alt="Logo Wealth Health" />
        <H1 className="main_title">Wealth Health</H1>
      </StyledLink>
      <NavRightContainer className="nav_right_container">
        <H3 className="HRnet_title">HRnet</H3>
        {url.pathname === "/" ? (
          <EmployeePageLink to={"/employeeList"} className="Employee_page_link">
            Current Employees
          </EmployeePageLink>
        ) : (
          <EmployeePageLink to={"/"} className="Homepage_link">
            Create Employees
          </EmployeePageLink>
        )}
      </NavRightContainer>
    </MainNav>
  );
}

/**
 *@returns  Header Style
 */
const MainNav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 2px solid ${colors.primary};
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: baseline;
  text-decoration: none;
`;
const MainLogo = styled.img`
  width: 110px;
`;
const NavRightContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: end;
  align-items: baseline;
`;
const H1 = styled.h1`
  color: ${colors.primary};
  font-size: 35px;
  margin-left: -10px;
`;
const H3 = styled.h3``;
const EmployeePageLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.primary};
  font-size: 16px;
  margin-left: 70px;
`;
