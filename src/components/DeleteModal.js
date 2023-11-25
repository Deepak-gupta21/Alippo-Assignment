import React from 'react';
import '../styles/DeleteModal.css'; // Import TableComponent CSS

const DeleteModal = ({ item, closeModal, handleSubmit }) => {
  
  const handleDelete = () => {
    handleSubmit();
  };

  return (
    <div className="delete-modal">
      <div className="delete-modal-content">
        <h2>Delete Item</h2>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteModal;
