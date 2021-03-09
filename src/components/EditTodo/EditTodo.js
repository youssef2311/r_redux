import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import {FiEdit} from 'react-icons/fi';
import {editTodo} from '../JS/Actions/actions'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditTodo = ({todo}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newTextTodo, setNewTextTodo] = useState(todo.text);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handelEdit = () => {
    dispatch(editTodo({ text: newTextTodo, id: todo.id }));
    closeModal();
  };
 

  return (
    <Fragment>
      <FiEdit size="30px" onClick={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
          <input
            style={{ padding: "0.5rem 1rem" }}
            type="text"
            value={newTextTodo}
            onChange={(e) => setNewTextTodo(e.target.value)}
          />
          <button className="my-btn" onClick={handelEdit}>
            Confirm
          </button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default EditTodo;