import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import QuickAddCard from './QuickAddCard';
import Drawer from '@mui/material/Drawer';


const Items = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Cheese Burger', description: 'burger' },
    ]);

    const addCard = (title, description) => {
        const newCard = {
            id: cards.length + 1,
            title,
            description
        };
        setCards([...cards, newCard]);
    };

    const [open, setOpen] = useState(false);

    const quickAddCard = (newOpen) => () => {
        setOpen(newOpen);
    };
 
    return (
        <div>
            <Box display="flex" alignItems="center" gap="8px" flexWrap="wrap">
                {cards.map((card) => (
                    <Card key={card.id}>
                        <CardContent>
                            <Avatar sx={{ backgroundColor: 'red', m: 'auto', width: 100, height: 100 }} aria-label="recipe">
                                {card.title.charAt(0)}
                            </Avatar>
                        </CardContent>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" sx={{ backgroundColor: 'rgb(40 83 216)', color: 'white', width: 200 }}> 100</Button>
                        </CardActions>
                    </Card>
                ))}

                <IconButton
                    type="button"
                    onClick={() => addCard('New Item', 'burger')}       
                    sx={{ color: 'rgb(40 83 216)' }}
                >
                    <AddCircleOutlinedIcon sx={{ fontSize: 30 }} />
                </IconButton>
            </Box>
            <IconButton
                type="button"
                onClick={quickAddCard(true)}
                sx={{ color: 'rgb(40 83 216)', position: 'fixed', bottom: "10vh", right: "7vh" }}
            >
                <OfflineBoltOutlinedIcon sx={{ fontSize: 40 }} />
            </IconButton>

            <Drawer open={open} onClose={quickAddCard(false)} anchor='right'>
                <QuickAddCard onClose={quickAddCard(false)}/>
            </Drawer>
        </div>
    );
};
export default Items;