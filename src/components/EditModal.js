import React, { useState } from 'react';
import '../styles/EditModal.css'; // Import EditModal CSS

const EditModal = ({ item, closeModal, handleSubmit }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSave = () => {
    handleSubmit(editedItem);
    // console.log(editedItem);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Item</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editedItem.name || ''}
          onChange={handleInputChange}
        />
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={editedItem.age || ''}
          onChange={handleInputChange}
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={editedItem.city || ''}
          onChange={handleInputChange}
        />
        <label>Pincode:</label>
        <input
          type="text"
          name="pinCode"
          value={editedItem.pinCode || ''}
          onChange={handleInputChange}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
