
import React from 'react';

function SalespersonList({ salespersons, setSalespersons }) {
  const updateSalesperson = (updatedSalesperson) => {
    setSalespersons(salespersons.map((salesperson) => (salesperson.id === updatedSalesperson.id ? updatedSalesperson : salesperson)));
  };

  return (
    <div>
      <h2>Salespersons</h2>
      <ul>
        {salespersons.map((salesperson) => (
          <li key={salesperson.id}>
            {salesperson.firstName} {salesperson.lastName} - {salesperson.manager}
            {/* Add more salesperson details and edit functionality as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalespersonList;
