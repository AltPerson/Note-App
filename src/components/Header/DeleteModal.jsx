import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { removeNote } from "../../data/db/index";

function DeleteModal({ setIsOpen, selected, setSelected, setSide, isInit }) {
  const [init, setInit] = isInit;
  return (
    <div className="modal">
      <div className="modal-form form">
        <h2 className="form__title">Are you sure?</h2>
        <div className="form-buttons">
          <button
            onClick={() => {
              removeNote(selected.id);
              setIsOpen(false);
              setSelected({ is: false, id: null });
              setSide(false);
              if (init) {
                setInit(false);
              }
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
