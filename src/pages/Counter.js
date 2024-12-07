import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import {
    Box, Button, Typography, Divider, TextField, Grid
} from '@mui/material';


const Counter = () => {

    const [items, setItems] = useState([{ title: 'Food', quantity: 1, price: 50 }]);
    const [subtotal, setSubtotal] = useState(50);
    const [grandTotal, setGrandTotal] = useState(50);

    const handleAddItem = () => {
        const newItem = { title: 'New Item', quantity: 1, price: 50 };
        setItems([...items, newItem]);
        updateTotals(newItem.price);
    };

    const updateTotals = (price) => {
        setSubtotal(subtotal + price);
        setGrandTotal(grandTotal + price);
    };

    const handleClear = () => {
        setItems([]);
        setSubtotal(0);
        setGrandTotal(0);
    };
    return (
        <Box sx={{ padding: 2 }}>
            {items.length === 0 ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 ,flexDirection:'column'}}>
                    <Card sx={{ minWidth: 100, textAlign: 'center' }}>
                        <CardContent>

                            <IconButton
                                type="button"
                                sx={{ color: 'rgb(40 83 216)' }}
                            >
                                <AddCircleOutlinedIcon sx={{ fontSize: 30 }} />
                            </IconButton>

                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18, fontWeight: 'bold' }}>
                                New Order
                            </Typography>
                        </CardContent>
                    </Card>
                    <Typography sx={{ color: 'blue', textAlign: 'center' }}>
                        Pending Sales (park):0
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                        No pending
                    </Typography>
                </Box>
            ) : (

                <Box>
                    {/* Items List */}
                    {items.map((item, index) => (
                        <Box key={index} display="flex" justifyContent="space-between" alignItems="center" py={1}>
                            <Typography variant="body1">{item.title}</Typography>
                            <Typography variant="body2">{item.quantity} x {item.price}</Typography>
                            <Typography variant="body2">{item.price}</Typography>
                        </Box>
                    ))}

                    {/* Add New Item Button */}
                    <Button
                        variant="contained"
                        onClick={handleAddItem}
                        sx={{ width: '100%', marginTop: 2, backgroundColor: 'rgb(40 83 216)', color: 'white' }}
                    >
                        ADD NEW ITEM
                    </Button>

                    <Divider sx={{ marginY: 2 }} />

                    {/* Subtotal */}
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body1">Subtotal</Typography>
                        <Typography variant="body1">{subtotal}</Typography>
                    </Box>

                    {/* Grand Total */}
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Typography variant="h6">Grand Total</Typography>
                        <Typography variant="h6" color="primary">{`₹${grandTotal.toFixed(2)}`}</Typography>
                    </Box>

                    <Typography variant="body2" textAlign="right">
                        {items.length} ITEMS | {items.length} UNITS
                    </Typography>

                    <Box mt={2}>
                        <Button size="small" sx={{ textTransform: 'none', color: 'rgb(40 83 216)' }}>ADD TAX</Button>
                        <Button size="small" sx={{ textTransform: 'none', color: 'rgb(40 83 216)' }}>ADD DISCOUNT</Button>
                        <Button size="small" sx={{ textTransform: 'none', color: 'rgb(40 83 216)' }}>ADD OTHER CHARGES</Button>
                    </Box>

                    {/* Action Buttons */}
                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="error"
                                onClick={handleClear}
                            >
                                CLEAR
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ backgroundColor: 'orange', color: 'white' }}
                            >
                                SAVE FOR LATER
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Box>
    );
};
export default Counter;
