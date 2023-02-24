import { FunctionComponent } from "react";
import "./Index.css";
import Cancel from "../../assets/Cancel.svg";
import LoginComp from "./LoginComp";
import AddPostComp from "./AddPostComp";
interface ModalProps {
  modalName: String;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  modalName,
  isOpen,
  setIsOpen,
}) => {
  const CloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="modal_container">
      <div className="modal_innder_container">
        <div className="modal_header">
          <h3>{modalName}</h3>
          <button onClick={CloseModal}>
            <img src={Cancel} alt="" />
          </button>
        </div>
        <div className="modal_body">
          {modalName === "Login" ? <LoginComp /> : <AddPostComp />}
        </div>
        <div className="modal_footer">
          <button>{modalName}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
