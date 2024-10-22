import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './QuickAddCard.css';
import Button from '@mui/material/Button';
import Numberpad from 'react-numberpad';


const DrawerContent = ({ addCard, onClose }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [inputValue, setInputValue] = useState('');

  // const handleButtonClick = (value) => {
  //   setInputValue((prev) => prev + value);
  // };

  // const handleDelete = () => {
  //   setInputValue((prev) => prev.slice(0, -1));
  // };

  // const handleSubmit = () => {
  //   console.log('Final Value:', inputValue);
  //   // Here, you can add logic to process the input, e.g., adding to cart
  // };


 

  const handleSubmit = () => {
      if (title.trim()) {
          addCard(title, description || 'No description');
          onClose(); // Close the drawer after adding
      }
  };


  const [value, setValue] = useState('');

  const handleInputChange = (newValue) => {
    setValue(newValue);
  };



  return (
    <div className="numberpad-container">
    <div className="numberpad-header">
      <button className="back-button">X</button>
      <h4>INSTANT/QUICK ADD</h4>
    </div>
    <textarea type="text" value={value} onChange={(e) => handleInputChange(e.target.value)} className='amount-display' />

    <Box className="numberpad-content">
      please enter name
      <label>
        <input type="checkbox" />
        Add to Database
      </label>
    </Box>
    <Numberpad
      value={value}
      onChange={handleInputChange}
      popup={false}
      style={{
        width: '200px',
        height: '300px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
      }}
    />
    <Button onClick={handleSubmit} variant="contained" color="success" sx={{ width: "100%" }}>
      ADD TO CART
    </Button>
  </div>
);
};

const QuickAddCard = ({ onClose }) => {
  return (
    <Box
      sx={{ width: 300 }}
      role="presentation"
    >
      <DrawerContent />

    </Box>
  );
};
export default QuickAddCard;