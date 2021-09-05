import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { removeNote } from "../../data/db/index";

function DeleteModal({ setIsOpen, selected, setSelected }) {
  return (
    <div className="modal">
      <div className="modal-form form">
        <h2 className="form__title">Are you sure?</h2>
        <div className="form-buttons">
          <button
            onClick={() => {
              console.log(selected.id);
              removeNote(selected.id);
              setIsOpen(false);
              setSelected({ is: false, id: null });
            }}
            className="form-buttons_btn form-buttons__agree"
          >
            <AiOutlineCheck />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="form-buttons_btn form-buttons__decline"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
