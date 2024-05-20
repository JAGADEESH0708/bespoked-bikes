// src/App.js
import React, { useState } from 'react';
import SalesList from './SalesList';
import QuarterlyReport from './QuarterlyReport'; // Ensure this matches

const initialProducts = [
    { id: 1, name: 'Road Bike', manufacturer: 'Bike Co', style: 'Road', purchasePrice: 500, salePrice: 1000, qtyOnHand: 10, commissionPercentage: 10},
    { id: 2, name: 'Street Bike', manufacturer: 'Bike Co', style: 'Street', purchasePrice: 600, salePrice: 1100, qtyOnHand: 10, commissionPercentage: 12},
    { id: 3, name: 'State Bike', manufacturer: 'Bike Co', style: 'State', purchasePrice: 700, salePrice: 1200, qtyOnHand: 5, commissionPercentage: 15}
];

const initialSalespersons = [
    { id: 1, firstName: 'John', lastName: 'Doe', address: '123 Main St', phone: '555-1234', startDate: '2021-01-01', terminationDate: null, manager: 'Jane Smith' },
    { id: 2, firstName: 'Sai', lastName: 'Jagadeesh', address: '525 E Armour', phone: '768-1768', startDate: '2024-01-01', terminationDate: null, manager: 'Jane Smith' },
    // Add more salespersons as needed
];

const initialCustomers = [
    { id: 1, firstName: 'Alice', lastName: 'Smith', address: '456 Elm St', phone: '555-5678'},
    { id: 2, firstName: 'Joe', lastName: 'Biden', address: 'white house', phone: '999-9999'},
    // Add more customers as needed
];

function App() {
    const [products, setProducts] = useState(initialProducts);
    const [salespersons, setSalespersons] = useState(initialSalespersons);
    const [customers, setCustomers] = useState(initialCustomers);
    const [sales, setSales] = useState([]); // Assuming sales is an array of sales;
    const [nextSaleId, setNextSaleId] = useState(1); // Initialize sale ID counter

    const addSale = (newSale) => {
        setSales([...sales, { ...newSale, id: nextSaleId }]);
        setNextSaleId(nextSaleId + 1);
    };

    return (
        <div>
            <h1>BeSpoked Bikes Sales Tracking</h1>
            <SalesList sales={sales} products={products} salespersons={salespersons} customers={customers} addSale={addSale} />
            <QuarterlyReport sales={sales} salespersons={salespersons} />
        </div>
    );
}

export default App;
