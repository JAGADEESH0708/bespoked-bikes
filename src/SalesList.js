
import React, { useState } from 'react';

function SalesList({ sales, products, salespersons, customers, addSale }) {
  const [newSale, setNewSale] = useState({ productId: '', salespersonId: '', customerId: '', salesDate: '', price: 0, commission: 0 });

  const handleAddSale = () => {
    const product = products.find(p => p.id === parseInt(newSale.productId));
    const commission = (product.salePrice * product.commissionPercentage) / 100;
    addSale({ ...newSale, commission });
    setNewSale({ productId: '', salespersonId: '', customerId: '', salesDate: '', price: 0, commission: 0 });
  };

  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map((sale) => {
          const product = products.find(p => p.id === sale.productId);
          const salesperson = salespersons.find(sp => sp.id === sale.salespersonId);
          const customer = customers.find(c => c.id === sale.customerId);
          return (
            <li key={sale.id}>
              {product.name} sold by {salesperson.firstName} {salesperson.lastName} to {customer.firstName} {customer.lastName} on {sale.salesDate} for ${sale.price} with ${sale.commission} commission
              {/* Add more sale details and filter functionality as needed */}
            </li>
          );
        })}
      </ul>
      <h3>Add Sale</h3>
      <div>
        <label>
          Product:
          <select value={newSale.productId} onChange={(e) => setNewSale({ ...newSale, productId: e.target.value })}>
            <option value="">Select Product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </label>
        <label>
          Salesperson:
          <select value={newSale.salespersonId} onChange={(e) => setNewSale({ ...newSale, salespersonId: e.target.value })}>
            <option value="">Select Salesperson</option>
            {salespersons.map(salesperson => (
              <option key={salesperson.id} value={salesperson.id}>{salesperson.firstName} {salesperson.lastName}</option>
            ))}
          </select>
        </label>
        <label>
          Customer:
          <select value={newSale.customerId} onChange={(e) => setNewSale({ ...newSale, customerId: e.target.value })}>
            <option value="">Select Customer</option>
            {customers.map(customer => (
              <option key={customer.id} value={customer.id}>{customer.firstName} {customer.lastName}</option>
            ))}
          </select>
        </label>
        <label>
          Sales Date:
          <input type="date" value={newSale.salesDate} onChange={(e) => setNewSale({ ...newSale, salesDate: e.target.value })} />
        </label>
        <label>
          Price:
          <input type="number" value={newSale.price} onChange={(e) => setNewSale({ ...newSale, price: parseFloat(e.target.value) })} />
        </label>
        <button onClick={handleAddSale}>Add Sale</button>
      </div>
    </div>
  );
}

export default SalesList;
