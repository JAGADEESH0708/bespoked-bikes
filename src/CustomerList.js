
import React from 'react';

function CustomerList({ customers }) {
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName} - {customer.phone}
            {/* Add more customer details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
