import React,{ useState } from 'react';
import Box from '@mui/material/Box';
import './QuickAddCard.css';

import Button from '@mui/material/Button';

const DrawerContent = () => {
    
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (value) => {
      setInputValue((prev) => prev + value);
    };
  
    const handleDelete = () => {
      setInputValue((prev) => prev.slice(0, -1));
    };
  
    const handleSubmit = () => {
      console.log('Final Value:', inputValue);
      // Here, you can add logic to process the input, e.g., adding to cart
    };
  
    return (
      <div className="numberpad-container">
        <header>
          <button className="back-button">X</button>
          <h4>INSTANT/QUICK ADD</h4>
        </header>
  
        <div className="amount-display">
          ₹{inputValue || '0'}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Category"
            value="Food"
          />
          <label>
            <input type="checkbox" />
            Add to Database
          </label>
        </div>
  
        <div className="numpad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number.toString())}
              className="numpad-button"
            >
              {number}
            </button>
          ))}
          <button onClick={handleDelete} className="numpad-button">
            ⌫
          </button>
        </div>
  
        <Button onClick={handleSubmit} variant="contained" color="success" sx={{width:"100%"}}>
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