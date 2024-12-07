import React from 'react';
import { Box,Typography,Button,Avatar,Card,CardContent,CardActions  } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const cards = [{ id: 1, title: 'Item A', value: '100'},
               { id: 2, title: 'Item B', value: '200'},
               { id: 3, title: 'Item C', value: '300'},
               { id: 4, title: 'Item D', value: '400'},
               { id: 5, title: 'Item E', value: '500'}];

function Tutorial() {
    const navigate = useNavigate();
    return (
            <div>
      <Box display="flex" alignItems="center" gap="8px" flexWrap="wrap" margin="10px">
                {cards.map((card) => (
                    <Card key={card.id}>
                        <CardContent>
                            <Avatar sx={{ backgroundColor: 'red', m: 'auto', width: 100, height: 100 }}>
                            </Avatar>
                        </CardContent>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5">{card.title}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" sx={{ backgroundColor: 'rgb(40 83 216)', color: 'white', width: 200 }}>
                                ${card.value || '100'}
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            <Button

                                variant="contained"
                                color="success"
                                sx={{float:'right'}}
                               onClick={() => navigate('/home')}
                            >
                                Go to Counter
                            </Button>
                            </div>
    )
};
export default Tutorial;
