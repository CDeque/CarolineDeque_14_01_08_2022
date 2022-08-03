//Import
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import colors from "../../utils/style/colors";

/**
 *
 * @param {ClassName, title, List}
 * @returns dropdowns for homepage
 */

export default function Dropdown({ className, title, list }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <CollapseBtn className={className} onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <FontAwesomeIcon icon={faCaretUp} style={{ fontSize: "1rem" }} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: "1rem" }} />
        )}
      </CollapseBtn>
      {isOpen && <DropdownListContainer>{list}</DropdownListContainer>}
    </div>
  );
}

/**
 * @returns Dropdown Style
 */

const CollapseBtn = styled.button`
  width: 14rem;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  background-color: ${colors.terciary};
  border: solid 2px ${colors.secondary};
  border-radius: 3px;
`;
const DropdownListContainer = styled.ul`
  width: 14rem;
  list-style-type: none;
  padding-left: 20px;
  padding-top: 10px;
  max-height: 250px;
  overflow: scroll;
`;
