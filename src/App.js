// src/App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import SalespersonList from './SalespersonList';
import CustomerList from './CustomerList';
import SalesList from './SalesList';
import QuarterlyReport from './QuarterlyReport'; // Ensure this matches

const initialProducts = [
    { id: 1, name: 'Road Bike', manufacturer: 'Bike Co', style: 'Road', purchasePrice: 500, salePrice: 1000, qtyOnHand: 10, commissionPercentage: 10 },
    // Add more products as needed
];

const initialSalespersons = [
    { id: 1, firstName: 'John', lastName: 'Doe', address: '123 Main St', phone: '555-1234', startDate: '2021-01-01', terminationDate: null, manager: 'Jane Smith' },
    // Add more salespersons as needed
];

const initialCustomers = [
    { id: 1, firstName: 'Alice', lastName: 'Smith', address: '456 Elm St', phone: '555-5678', startDate: '2021-02-01' },
    // Add more customers as needed
];

const initialDiscounts = [
    { id: 1, productId: 1, beginDate: '2023-01-01', endDate: '2023-02-01', discountPercentage: 5 },
    // Add more discounts as needed
];

function App() {
    const [products, setProducts] = useState(initialProducts);
    const [salespersons, setSalespersons] = useState(initialSalespersons);
    const [customers, setCustomers] = useState(initialCustomers);
    const [sales, setSales] = useState([]); // Assuming sales is an array of sales
    const [discounts] = useState(initialDiscounts);
    const [nextSaleId, setNextSaleId] = useState(1); // Initialize sale ID counter

    const addSale = (newSale) => {
        setSales([...sales, { ...newSale, id: nextSaleId }]);
        setNextSaleId(nextSaleId + 1); // Increment sale ID counter
    };

    return (
        <div>
            <h1>BeSpoked Bikes Sales Tracking</h1>
            <SalespersonList salespersons={salespersons} setSalespersons={setSalespersons} />
            <ProductList products={products} setProducts={setProducts} />
            <CustomerList customers={customers} />
            <SalesList sales={sales} products={products} salespersons={salespersons} customers={customers} addSale={addSale} />
            <QuarterlyReport sales={sales} salespersons={salespersons} />
        </div>
    );
}

export default App;
