import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // to avoid accessibility warning

function CandyCard({ candy }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="candy-card">
      <img src={`/images/${candy.image}`} alt={candy.name} style={{ width: "100px" }} />
      <h3>{candy.name}</h3>
      <button onClick={openModal}>View Calories</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Calorie Information">
        <h2>{candy.name}</h2>
        <p>Calories: {candy.calories}</p>
        <p>Ingredients: {candy.ingredients}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default CandyCard;
