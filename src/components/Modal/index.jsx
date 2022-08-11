//Imports
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

/**
 *
 * @param {text} to add text to modal
 * @param {closeModal} to close modal on click
 * @returns
 */
export default function Modal({ text, closeModal }) {
  return (
    <ModalBackground className="modal_background" onClick={closeModal}>
      <ModalContainer className="modal">
        <p className="modal_text">{text}</p>
        <IconContainer className="modal_icon">
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{
              position: "absolute",
              top: "-45px",
              right: "-35px",
              fontSize: "22px",
              backgroundColor: "#fff",
              borderRadius: "50%",
            }}
            onClick={closeModal}
          />
        </IconContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

/**@returns Modal Style */
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
`;
