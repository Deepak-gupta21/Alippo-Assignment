import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import '../styles/TableComponent.css'; // Import TableComponent CSS


const TableComponent = () => {
  const [data, setData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('https://assets.alippo.com/catalog/static/data.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  // opeing the modals 
  const openEditModal = (item) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };


  const openDeleteModal = (item) => {
    if (item) {
      setSelectedItem(item);
      setDeleteModalOpen(true);
    }
  };
  

   // closing the modals 
  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedItem(null);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedItem(null);
  };


  // handeling modals
 const handleEditSubmit = (editedItem) => {
  const updatedData = data.map(item => {
    return item.id === editedItem.id ? { ...editedItem } : item;
  });

  setData(updatedData);
  setEditModalOpen(false);
};

  
  

  

 

  const handleDeleteSubmit = () => {
    if (selectedItem) {
      const updatedData = data.filter(item => item !== selectedItem);
      console.log(selectedItem)
      setData(updatedData);
    }
    setDeleteModalOpen(false);
  };
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.pinCode}</td>
              {/* Display other columns based on item properties */}
              <td>
                <button onClick={() => openEditModal(item)}>Edit</button>
                <button onClick={() => openDeleteModal(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editModalOpen && (
        <EditModal
          item={selectedItem}
          closeModal={closeEditModal}
          handleSubmit={handleEditSubmit}
        />
      )}

      {deleteModalOpen && (
        <DeleteModal
          item={selectedItem}
          closeModal={closeDeleteModal}
          handleSubmit={handleDeleteSubmit}
        />
      )}
    </div>
  );
};

export default TableComponent;