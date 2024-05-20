
import React, { useState } from 'react';

function SalesList({ sales, products, salespersons, customers, addSale }) {
  const [newSale, setNewSale] = useState({ productId: '', salespersonId: '', customerId: '', salesDate: null, price: 0, commission: 0 });

  const handleAddSale = () => {
    const product = products.find(p => p.id === parseInt(newSale.productId));
    console.log("updated product values are ", product);
    const commission = (product.salePrice * product.commissionPercentage) / 100;
    addSale({ ...newSale, commission });
    console.log("updated sales values are ", sales);
    setNewSale({ productId: '', salespersonId: '', customerId: '', salesDate: '', price: 0, commission: 0 });
  };

  const findProductById = (productId) => {
    return products.find(product => product.id == productId);
  };

  return (
      <div>
        <h2>Sales</h2>
        <ul>
          {sales.map((sale) => {
            console.log("sale value is ", sale)
            const product = findProductById(sale.productId);
            const salesperson = salespersons.find(sp => sp.id == sale.salespersonId);
            const customer = customers.find(c => c.id == sale.customerId);

            console.log("product value is ", product)
            if (!product || !salesperson || !customer) {
              return null; // Skip if any of the related entities are not found
            }

            return (
                <li key={sale.id}>
                  {product.name} sold
                  by {salesperson.firstName} {salesperson.lastName} to {customer.firstName} {customer.lastName} on {new Date(sale.salesDate).toLocaleDateString()} for
                  ${sale.price} with ${sale.commission} commission
                </li>
            );
          })}
      </ul>
  <h3>Add Sale</h3>
  <div>
    <ul>
      <li>
        <label>
          Product:&nbsp;&nbsp;&nbsp;
          <select value={newSale.productId} onChange={(e) => setNewSale({...newSale, productId: e.target.value})}>
            <option value=""> Select Product</option>
            {products.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </label>
      </li>
    </ul>
    <ul>
      <li>
        <label>
          Salesperson:&nbsp;&nbsp;&nbsp;
          <select value={newSale.salespersonId}
                  onChange={(e) => setNewSale({...newSale, salespersonId: e.target.value})}>
            <option value=""> Select Salesperson</option>
            {salespersons.map(salesperson => (
              <option key={salesperson.id} value={salesperson.id}>{salesperson.firstName} {salesperson.lastName}</option>
            ))}
          </select>
        </label>
        </li>
        </ul>
        <ul>
        <li>
        <label>
          Customer:&nbsp;&nbsp;&nbsp;
          <select value={newSale.customerId} onChange={(e) => setNewSale({ ...newSale, customerId: e.target.value })}>
            <option value=""> Select Customer </option>
            {customers.map(customer => (
              <option key={customer.id} value={customer.id}>{customer.firstName} {customer.lastName}</option>
            ))}
          </select>
        </label>
        </li>
        </ul>
        <ul>
          <li>
            <label>
              Sales Date:&nbsp;&nbsp;&nbsp;
              <input type="date" value={newSale.salesDate ? newSale.salesDate.toISOString().split('T')[0] : ''}
                     onChange={(e) => setNewSale({...newSale, salesDate: new Date(e.target.value)})}/>
            </label>
          </li>
        </ul>
        <ul>
          <li>
            <label>
              Price:&nbsp;&nbsp;&nbsp;
              <input type="number" value={newSale.price}
                     onChange={(e) => setNewSale({...newSale, price: e.target.value})}/>
            </label>
          </li>
        </ul>
        <ul>
        <button onClick={handleAddSale}>Add Sale</button>
        </ul>
      </div>
    </div>
  );
}

export default SalesList;
