// Imports
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { departments } from "../../data/departments";
import { states } from "../../data/states";
import colors from "../../utils/style/colors";
import { useState } from "react";
import Modal from "cd-modal-14";

/**
 * @returns create employeess Form
 * store employee
 * reset form on submit
 */

export default function Form() {
  // set a initial state
  console.log(Modal);
  const initialState = {
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  const [getData, setGetData] = useState(initialState);
  console.log(getData);

  //Handle change on input in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGetData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  // Get Employee Data
  let employeeData = JSON.parse(localStorage.getItem("newEmployee")) || [];

  // To display modal on form validation
  const [displayModal, setDisplayModal] = useState(false);
  const showModal = () => {
    setDisplayModal(true);
  };
  // To close the modal
  const closeModal = () => {
    setDisplayModal(false);
  };
  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    employeeData = employeeData || [];
    employeeData.push(getData);
    console.log(employeeData);

    //Store employees data in the localStorage
    localStorage.setItem("newEmployee", JSON.stringify(employeeData));

    // return to initial state when submitted
    setGetData({ ...initialState });
    showModal();
  };

  return (
    <FormContainer className="form_container">
      <UserContainer className="user_container">
        <FontAwesomeIcon icon={faPlus} fontSize="2rem" color="#000000" />
        <FontAwesomeIcon icon={faUser} fontSize="2.5rem" color="#000000" />
      </UserContainer>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="firstName">
          Firstname:
          <Input
            type="text"
            placeholder="Firstname..."
            pattern="[A-Za-z\]*"
            onChange={handleChange}
            name="firstName"
            value={getData.firstName}
            autoComplete="off"
            required
          />
        </Label>
        <Label htmlFor="lastname">
          Lastname:
          <Input
            type="text"
            placeholder="Lastname..."
            pattern="[A-Za-\]*"
            onChange={handleChange}
            name="lastName"
            value={getData.lastName}
            autoComplete="off"
            required
          />
        </Label>
        <Label htmlFor="date of birth">
          Date of Birth
          <InputDate
            type="date"
            onChange={handleChange}
            name="birthDate"
            value={getData.birthDate}
            autoComplete="off"
            required
          />
        </Label>
        <Label htmlFor="Start Date">
          Start Date
          <InputDate
            type="date"
            placeholder="Start Date"
            onChange={handleChange}
            name="startDate"
            value={getData.startDate}
            autoComplete="off"
            required
          />
        </Label>
        <AddressContainer className="address">
          <Address>Adress</Address>
          <Label htmlFor="street">
            Street:
            <Input
              type="text"
              placeholder="Street..."
              pattern="[A-Za-z\]*"
              onChange={handleChange}
              name="street"
              value={getData.street}
              autoComplete="off"
              required
            />
          </Label>
          <Label htmlFor="city">
            City:
            <Input
              type="text"
              placeholder="City..."
              pattern="[A-Za-z\]*"
              onChange={handleChange}
              name="city"
              value={getData.city}
              autoComplete="off"
              required
            />
          </Label>
          <StateContainer className="state_container">
            <Label htmlFor="stateLabel">
              State:
              <Select
                name="state"
                value={getData.state}
                onChange={handleChange}
                autoComplete="off"
                required
              >
                <option></option>
                {states.map((state, index) => (
                  <Options className="items" key={index}>
                    {state.name}
                  </Options>
                ))}
              </Select>
            </Label>
          </StateContainer>

          <Label htmlFor="Zip Code">
            Zip Code:
            <Input
              type="text"
              placeholder="Zip Code..."
              pattern="[0-9\]*"
              onChange={handleChange}
              name="zipCode"
              value={getData.zipCode}
              autoComplete="off"
              required
            />
          </Label>
          <DepartmentContainer className="departmentContainer">
            <Label htmlFor="departmentLabel">
              Department:
              <Select
                name="department"
                value={getData.department}
                onChange={handleChange}
                required
              >
                <option></option>
                {departments.map((department, index) => (
                  <Options className="items" key={index}>
                    {department.name}
                  </Options>
                ))}
              </Select>
            </Label>
          </DepartmentContainer>
        </AddressContainer>
        <SaveBtnContainer className="savebtn_container">
          <SaveBtn className="save_btn">Save</SaveBtn>
          {displayModal && (
            <Modal
              text={"Employee successfully created!"}
              closeModal={closeModal}
            />
          )}
        </SaveBtnContainer>
      </form>
    </FormContainer>
  );
}

/**
 * @returns Form style
 */
const FormContainer = styled.div`
  width: 500px;
  max-height: 750px;
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
  color: ${colors.black};
  font-size: 16px;
`;
const Input = styled.input`
  width: 21.3rem;
  border: none;
  margin-bottom: 10px;
  border-bottom: 1.5px solid ${colors.black};
  ::placeholder {
    color: ${colors.black};
    opacity: 0.4;
    font-size: 12px;
  }
`;
const InputDate = styled.input`
  width: 21.3rem;
  border: none;
  border-bottom: 1.5px solid ${colors.black};
  colo ::placeholder {
    color: ${colors.black};
    opacity: 0.4;
    font-size: 12px;
  }
`;
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 5px;
  border-bottom: 2px solid ${colors.black};
  width: 100%;
`;
const Address = styled.p`
  width: 350px;
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  color: ${colors.black};
  border-bottom: 2px solid ${colors.black};
`;
const Select = styled.select`
  width: 14rem;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
  color: ${colors.black};
  font-size: 16px;
  font-weight: 500;
  background-color: ${colors.white};
  border: solid 2px ${colors.black};
  border-radius: 3px;
`;
const StateContainer = styled.div`
  margin-top: 10px;
  > label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const DepartmentContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  > label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Options = styled.option`
  margin-top: 2px; ;
`;
const SaveBtn = styled.button`
  width: 14rem;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 18px;
  border: solid 2px ${colors.black};
  border-radius: 3px;
  margin-top: 1rem;
`;
const SaveBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;
