import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InvoiceDetails from './InvoiceDetails';
import invoiceData from './invoiceData.json';

function App() {
  return (
    <div>
      <InvoiceDetails invoice={invoiceData} />
    </div>
  );
}

export default App;
