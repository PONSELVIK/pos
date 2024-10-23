import React, { useState } from 'react';
import {
    Card, CardActions, CardContent, Button, Typography, Avatar, Box, IconButton, Drawer, Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import CloseIcon from '@mui/icons-material/Close';

import QuickAddCard from './QuickAddCard';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/Add';
const Items = () => {
    const [cards, setCards] = useState([{ id: 1, title: 'Cheese Burger', description: 'burger', value: '100' }]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [number, setNumber] = useState(0);

    const addCard = (title, description, value) => {
        setCards([...cards, { id: cards.length + 1, title, description, value }]);
    };

    const toggleDrawer = (open) => () => setOpenDrawer(open);

    const openCardDialog = (card) => {
        setSelectedCard(card);
        setOpenDialog(true);
    };

    const closeDialog = () => {
        setOpenDialog(false);
        setSelectedCard(null);
    };

    const addNumber = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };

    const removeNumber = () => {
        setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0)); // Prevents negative numbers
    };

    return (
        <div>
            <Box display="flex" alignItems="center" gap="8px" flexWrap="wrap">
                {cards.map((card) => (
                    <Card key={card.id} onClick={() => openCardDialog(card)}>
                        <CardContent>
                            <Avatar sx={{ backgroundColor: 'red', m: 'auto', width: 100, height: 100 }}>
                                {card.title.charAt(0)}
                            </Avatar>
                        </CardContent>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5">{card.title}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{card.description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" sx={{ backgroundColor: 'rgb(40 83 216)', color: 'white', width: 200 }}>
                                {card.value || '100'}
                            </Button>
                        </CardActions>
                    </Card>
                ))}

                <IconButton onClick={() => addCard('New Item', 'burger', '100')} sx={{ color: 'rgb(40 83 216)' }}>
                    <AddCircleOutlinedIcon sx={{ fontSize: 30 }} />
                </IconButton>
            </Box>

            <IconButton onClick={toggleDrawer(true)} sx={{ color: 'rgb(40 83 216)', position: 'fixed', bottom: "10vh", right: "7vh" }}>
                <OfflineBoltOutlinedIcon sx={{ fontSize: 40 }} />
            </IconButton>

            <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor='right'>
                <QuickAddCard onClose={toggleDrawer(false)} />
            </Drawer>

            <Dialog open={openDialog} onClose={closeDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" PaperProps={{
                sx: { width: "500px", maxWidth: "none" }
            }}>
                <DialogTitle id="alert-dialog-title">
                    {selectedCard ? selectedCard.title : "Loading..."}
                </DialogTitle>
                <IconButton aria-label="close" onClick={closeDialog} sx={{ position: 'absolute', right: 8, top: 8, color: 'grey' }}>
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <card>
                            <CardContent sx={{ backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {selectedCard && selectedCard.value ? selectedCard.value : "No value available"}
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <IconButton aria-label="close" onClick={removeNumber}>
                                        <RemoveOutlinedIcon />
                                    </IconButton>
                                    <Typography variant="h5" align="center">
                                        {number}
                                    </Typography>
                                    <IconButton aria-label="close" onClick={addNumber}>
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </card>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>cancel</Button>
                    <Button onClick={closeDialog} autoFocus>ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Items;
