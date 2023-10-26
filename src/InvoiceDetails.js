import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, CardContent, Typography, Card} from '@mui/material';
import './style.css';

function InvoiceDetails({ invoice }) {
    return (
        <div >
            <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ backgroundColor: 'lightGrey' }}>
                <TableRow>
                    <TableCell style={{ width: '25%' }}>
                    <div>
                        <Typography variant="body1" gutterBottom>
                        ORDER PLACED
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        {invoice.created_at}
                        </Typography>
                    </div>
                    </TableCell>
                    <TableCell style={{ width: '25%' }}>
                    <div>
                        <Typography variant="body1" gutterBottom>
                        TOTAL
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        ${invoice.total_price}
                        </Typography>
                    </div>
                    </TableCell>
                    <TableCell style={{ width: '25%' }}>
                    <div>
                        <Typography variant="body1" gutterBottom>
                        SHIP TO
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        {invoice.full_name}
                        </Typography>
                    </div>
                    </TableCell>
                    <TableCell style={{ width: '25%' }}>
                    <div>
                        <Typography variant="body1" gutterBottom>
                        ORDER # {invoice.id}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        View order details
                        </Typography>
                    </div>
                    </TableCell>
                </TableRow>
                </TableHead>

            <TableBody>
            {invoice.items.map((item, index) => (
                <TableRow key={index}>
                <TableCell style={{ padding: 0, margin: 0, marginRight: '18px' }}>
                    <img src={item.image_url} alt={item.product_name} width="50" height="50" />
                </TableCell>

                <TableCell style={{ padding: 0, margin: 0 }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography variant="body1" gutterBottom>
                        {item.product_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Quantity: {item.quantity}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Total: ${item.price}
                    </Typography>
                    </CardContent>
                </TableCell>

                <TableCell style={{ padding: 0, margin: 0 }}>
                </TableCell>

                <TableCell style={{ width: '25%', paddingRight: '20px' }}>
                    <button>Write a product review</button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}

export default InvoiceDetails;

