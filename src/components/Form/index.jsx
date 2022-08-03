// Imports
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { departments } from "../../data/departments";
import { states } from "../../data/states";
import colors from "../../utils/style/colors";
import Dropdown from "../Dropdown";

/**
 * @returns create Employees Form
 */

export default function Form() {
  return (
    <FormContainer className="form_container">
      <UserContainer className="user_container">
        <FontAwesomeIcon icon={faPlus} fontSize="2rem" color="#6e8415" />
        <FontAwesomeIcon icon={faUser} fontSize="3rem" color="#6e8415" />
      </UserContainer>
      <Label htmlFor="firstname">Firstname:</Label>
      <Input type="text" placeholder="Firstname..." />
      <Label htmlFor="lastname">Lastname:</Label>
      <Input type="text" placeholder="Lastname..." />
      <Label htmlFor="date of birth">Date of Birth</Label>
      <Input type="date" placeholder="Date of Birth" />
      <Label htmlFor="Start Date">Start Date</Label>
      <Input type="date" placeholder="Start Date" />
      <AddressContainer className="address">
        <Address>Adress</Address>
        <Label htmlFor="street">Street:</Label>
        <Input type="text" placeholder="Street..." />
        <Label htmlFor="city">City:</Label>
        <Input type="text" placeholder="City..." />
        <StateContainer className="state_container">
          <Label htmlFor="state">State:</Label>
          <Dropdown
            className="state_dropdown"
            title="Alabama"
            list={states.map((state, index) => (
              <DropdownItems className="items" key={index}>
                {state.name}
              </DropdownItems>
            ))}
          />
        </StateContainer>
        <Label htmlFor="Zip Code">Zip Code:</Label>
        <Input type="number" placeholder="Zip Code..." />
        <DepartmentContainer className="departmentContainer">
          <Label htmlFor="department">Department:</Label>
          <Dropdown
            className="department_dropdown"
            title="Sales"
            list={departments.map((department, index) => (
              <DropdownItems className="items" key={index}>
                {department.name}
              </DropdownItems>
            ))}
          />
        </DepartmentContainer>
        <SaveBtnContainer className="savebtn_container">
          <SaveBtn className="save_btn">Save</SaveBtn>
        </SaveBtnContainer>
      </AddressContainer>
    </FormContainer>
  );
}

/**
 * @returns Form style
 */
const FormContainer = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 1rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${colors.white};
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 5rem;
`;
const UserContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
const Label = styled.label`
  margin-top: 10px;
  color: ${colors.primary};
  font-size: 16px;
`;
const Input = styled.input`
  width: 21.3rem;
  border: none;
  border-bottom: 1.5px solid ${colors.secondary};
  ::placeholder {
    color: ${colors.secondary};
    opacity: 0.4;
    font-size: 12px;
  }
`;
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const Address = styled.p`
  width: 50px;
  font-size: 16px;
  color: ${colors.primary};
  border-bottom: 2px solid ${colors.primary};
`;
const StateContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 10px;
`;
const DepartmentContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 10px;
`;

const DropdownItems = styled.li`
  margin-top: 2px; ;
`;
const SaveBtn = styled.button`
  width: 14rem;
  background-color: ${colors.secondary};
  color: ${colors.white};
  font-size: 18px;
  border: solid 2px ${colors.secondary};
  border-radius: 3px;
  margin-top: 1rem;
`;
const SaveBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;
